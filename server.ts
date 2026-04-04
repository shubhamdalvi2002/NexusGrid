import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET || "super-secret-key-change-me";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // --- Mock Database (In-memory for demo) ---
  const users: any[] = [];
  const machines: any[] = [
    { id: "1", gpu: "NVIDIA A100", vram: 40, cpu: 12, ram: 64, price: 0.85, status: "available", reliability: 0.99, providerId: "p1" },
    { id: "2", gpu: "NVIDIA RTX 4090", vram: 24, cpu: 16, ram: 32, price: 0.45, status: "available", reliability: 0.95, providerId: "p2" },
    { id: "3", gpu: "NVIDIA H100", vram: 80, cpu: 24, ram: 128, price: 2.10, status: "busy", reliability: 0.995, providerId: "p3" },
  ];
  const jobs: any[] = [];

  // --- Auth Middleware ---
  const authenticate = (req: any, res: any, next: any) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ error: "Invalid token" });
    }
  };

  // --- API Routes ---

  // Auth
  app.post("/api/auth/register", async (req, res) => {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { id: Date.now().toString(), name, email, password: hashedPassword, role, balance: 100 };
    users.push(user);
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET);
    res.json({ token, user: { id: user.id, name, email, role, balance: user.balance } });
  });

  app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET);
    res.json({ token, user: { id: user.id, name: user.name, email, role: user.role, balance: user.balance } });
  });

  // Machines
  app.get("/api/machines", (req, res) => {
    res.json(machines);
  });

  app.post("/api/machines", authenticate, (req, res) => {
    const machine = { ...req.body, id: Date.now().toString(), providerId: (req as any).user.id, reliability: 1.0, status: "available" };
    machines.push(machine);
    res.json(machine);
  });

  // Jobs & AI Scheduler
  app.post("/api/jobs", authenticate, (req, res) => {
    const { gpuReq, cpuReq, ramReq, dockerImage } = req.body;
    
    // --- AI Scheduler Logic ---
    // 1. Filter available machines that meet requirements
    const candidates = machines.filter(m => 
      m.status === "available" &&
      (gpuReq ? m.gpu.includes(gpuReq) : true) &&
      m.cpu >= (cpuReq || 0) &&
      m.ram >= (ramReq || 0)
    );

    if (candidates.length === 0) {
      return res.status(404).json({ error: "No suitable machines available" });
    }

    // 2. Rank candidates: Score = (Reliability / Price)
    // Higher reliability and lower price increase the score
    const bestMachine = candidates.sort((a, b) => {
      const scoreA = a.reliability / a.price;
      const scoreB = b.reliability / b.price;
      return scoreB - scoreA; // Descending
    })[0];

    const job = {
      id: Date.now().toString(),
      consumerId: (req as any).user.id,
      machineId: bestMachine.id,
      status: "running",
      dockerImage,
      createdAt: new Date(),
    };

    // Mark machine as busy
    bestMachine.status = "busy";
    jobs.push(job);

    res.json({ job, machine: bestMachine });
  });

  app.get("/api/jobs", authenticate, (req, res) => {
    const userJobs = jobs.filter(j => j.consumerId === (req as any).user.id || machines.find(m => m.id === j.machineId && m.providerId === (req as any).user.id));
    res.json(userJobs);
  });

  // --- Vite middleware for development ---
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
