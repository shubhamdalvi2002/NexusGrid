# ComputeShare Production Deployment Guide

## 🏗️ System Architecture

```text
[ Consumers ] <---> [ Load Balancer / Ingress ]
                          |
                          v
                [ Frontend (Next.js/React) ]
                          |
                          v
                [ Backend API (Node.js/Express) ]
                /         |          \
               v          v           v
      [ PostgreSQL ]  [ Redis ]  [ AI Scheduler ]
                          |
                          v
                  [ Worker Nodes ]
               (Provider Machines - GPU/CPU)
```

### Data Flow
1. **Provider** registers a machine. Machine specs and pricing are stored in PostgreSQL.
2. **Consumer** submits a job request with specific requirements (e.g., "Need NVIDIA A100, 16GB RAM").
3. **AI Scheduler** queries the database for available machines, filters by requirements, and ranks them based on:
   - Price (lower is better)
   - Reliability Score (historical uptime)
   - Latency (proximity to consumer if applicable)
4. **Job** is assigned to the best node. Redis handles the task queue.
5. **Worker Node** pulls the job, executes it in a secure container (Docker/Singularity), and reports status back via WebSockets.
6. **Payment** is processed upon successful job completion.

## 🗄️ Database Schema (PostgreSQL)

```sql
-- Users Table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role VARCHAR(20) CHECK (role IN ('provider', 'consumer', 'admin')),
    balance DECIMAL(12, 2) DEFAULT 0.00,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Machines Table
CREATE TABLE machines (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    provider_id UUID REFERENCES users(id),
    gpu_model VARCHAR(100),
    gpu_vram INTEGER, -- in MB
    cpu_cores INTEGER,
    ram INTEGER, -- in MB
    price_per_hour DECIMAL(10, 4) NOT NULL,
    status VARCHAR(20) DEFAULT 'available', -- 'available', 'busy', 'offline'
    reliability_score DECIMAL(3, 2) DEFAULT 1.00,
    last_seen TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Jobs Table
CREATE TABLE jobs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    consumer_id UUID REFERENCES users(id),
    machine_id UUID REFERENCES machines(id),
    status VARCHAR(20) DEFAULT 'pending', -- 'pending', 'running', 'completed', 'failed'
    docker_image TEXT NOT NULL,
    command TEXT,
    cost_estimate DECIMAL(10, 4),
    started_at TIMESTAMP WITH TIME ZONE,
    ended_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Transactions Table
CREATE TABLE transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    amount DECIMAL(12, 2) NOT NULL,
    type VARCHAR(20), -- 'deposit', 'withdrawal', 'payment', 'earning'
    status VARCHAR(20) DEFAULT 'completed',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## 🐳 DevOps: Docker Setup

### Dockerfile (Backend)
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### docker-compose.yml
```yaml
version: '3.8'
services:
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: computeshare
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
  
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  api:
    build: .
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgresql://user:password@db:5432/computeshare
      REDIS_URL: redis://redis:6379
    depends_on:
      - db
      - redis
```

## 🚀 Deployment Steps (AWS/GCP)
1. **Infrastructure**: Provision a Managed PostgreSQL (RDS/Cloud SQL) and Redis (ElastiCache/Memorystore).
2. **Container Registry**: Push Docker images to ECR (AWS) or GCR (GCP).
3. **Orchestration**: Deploy to Kubernetes (EKS/GKE) or App Runner/Cloud Run.
4. **CI/CD**: Set up GitHub Actions to build and deploy on every push to `main`.
5. **Monitoring**: Use Prometheus/Grafana or CloudWatch/Stackdriver for system health.
