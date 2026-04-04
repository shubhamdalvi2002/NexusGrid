import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Search, ChevronRight, Calendar, User, Tag } from 'lucide-react';

export const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const posts = [
    {
      id: 1,
      title: "The Rise of Decentralized AI Training",
      excerpt: "How distributed compute networks are changing the landscape of machine learning development.",
      author: "Alex Chen",
      date: "Mar 24, 2026",
      category: "AI & ML",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 2,
      title: "Maximizing GPU Efficiency in 2026",
      excerpt: "Tips and tricks for getting the most out of your rented hardware for 3D rendering.",
      author: "Sarah Miller",
      date: "Mar 20, 2026",
      category: "Hardware",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    },
    {
      id: 3,
      title: "NexusGrid Roadmap: What's Next?",
      excerpt: "A deep dive into our upcoming features including multi-cloud bridging and native SDKs.",
      author: "David Kim",
      date: "Mar 15, 2026",
      category: "Company",
      content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
    }
  ];

  if (selectedPost) {
    return (
      <div className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4">
          <button 
            onClick={() => setSelectedPost(null)}
            className="text-orange-500 hover:text-orange-400 mb-8 flex items-center gap-2 font-medium"
          >
            ← Back to Blog
          </button>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="bg-orange-500/10 text-orange-500 px-3 py-1 rounded-full font-bold">{selectedPost.category}</span>
            <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {selectedPost.date}</div>
            <div className="flex items-center gap-1"><User className="w-4 h-4" /> {selectedPost.author}</div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">{selectedPost.title}</h1>
          <div className="w-full h-64 bg-white/5 rounded-3xl mb-12" />
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">{selectedPost.excerpt}</p>
            <p className="text-gray-400 leading-relaxed mb-6">{selectedPost.content}</p>
            <p className="text-gray-400 leading-relaxed mb-6">{selectedPost.content}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Blog & Insights</h1>
            <p className="text-gray-400">Stay updated with the latest in decentralized computing.</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0">
            {['All', 'AI & ML', 'Hardware', 'Company', 'Industry'].map(cat => (
              <button key={cat} className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-400 hover:text-white hover:border-white/30 transition-all whitespace-nowrap">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <Card key={post.id} className="flex flex-col group cursor-pointer" onClick={() => setSelectedPost(post)}>
              <div className="w-full h-48 bg-white/5 rounded-2xl mb-6 group-hover:scale-[1.02] transition-transform" />
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                <span className="text-orange-500 font-bold">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">{post.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{post.excerpt}</p>
              <div className="flex items-center text-sm font-bold text-white">
                Read More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
