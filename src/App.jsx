import React, { useState } from 'react';
import { Search, Github, Instagram, MessageCircle, Mail, Calendar, User, Tag, ArrowRight, Menu, X } from 'lucide-react';

// Dummy data
const blogPosts = [
  {
    id: 1,
    title: "Membangun REST API dengan Node.js dan Express",
    excerpt: "Panduan lengkap untuk membuat REST API yang scalable menggunakan Node.js dan Express framework.",
    content: `
      <h2>Pendahuluan</h2>
      <p>REST API adalah salah satu arsitektur yang paling populer untuk membangun web service. Dalam artikel ini, kita akan membahas cara membuat REST API yang efisien menggunakan Node.js dan Express.</p>
      
      <h2>Setup Project</h2>
      <p>Pertama, kita perlu membuat project baru dan menginstall dependencies yang diperlukan:</p>
      <pre><code>npm init -y
npm install express cors helmet morgan</code></pre>
      
      <h2>Struktur Dasar</h2>
      <p>Berikut adalah struktur dasar untuk REST API kita:</p>
      <pre><code>const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/api/users', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});</code></pre>
    `,
    category: "Backend",
    date: "2024-01-15",
    author: "Gunmori",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop"
  }
];

const categories = ["All", "Frontend", "Backend", "Mobile", "DevOps", "Database"];

// Components
const Header = ({ activeTab, setActiveTab, isMenuOpen, setIsMenuOpen }) => (
  <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
    <div className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-sm">G</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Gunmori<span className="text-yellow-400">.</span></h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {["Home", "Blog", "Contact"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                activeTab === tab.toLowerCase()
                  ? "text-yellow-400 bg-yellow-400/10"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
          <nav className="flex flex-col space-y-2 mt-4">
            {["Home", "Blog", "Contact"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className={`px-3 py-2 rounded-lg text-left transition-all duration-300 ${
                  activeTab === tab.toLowerCase()
                    ? "text-yellow-400 bg-yellow-400/10"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  </header>
);

import { Github, Instagram, MessageCircle, Mail } from 'lucide-react';


const Hero = () => (
  <section className="bg-gradient-to-r from-black via-gray-900 to-black py-20 relative overflow-hidden">
    <div
      className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23374151\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E')]"
    />
    <div className="container mx-auto px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-pulse mb-6">
          <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-black font-bold text-2xl">G</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          IT <span className="text-yellow-400">Developer</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 animate-fade-in-delay">
          Sharing insights, projects, and experiences in the world of technology
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in-delay-2">
          <a href="https://github.com/gunlapar" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
            <Github className="w-6 h-6 text-white" />
          </a>
          <a href="https://www.instagram.com/gunmori_?igsh=cGN4Nzl4NHpyMnZi" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
            <Instagram className="w-6 h-6 text-white" />
          </a>
          <a href="https://wa.me/0895336205744" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
            <MessageCircle className="w-6 h-6 text-white" />
          </a>
          <a href="mailto:nostagis8@gmail.com" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
            <Mail className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
    </div>
  </section>
);


const BlogCard = ({ post, onClick }) => (
  <article 
    onClick={onClick}
    className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer group border border-gray-800 hover:border-yellow-400/50"
  >
    <div className="relative overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
          {post.category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center space-x-4 text-gray-400 text-sm mb-3">
        <span className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {new Date(post.date).toLocaleDateString('id-ID')}
        </span>
        <span className="flex items-center">
          <User className="w-4 h-4 mr-1" />
          {post.author}
        </span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
        {post.title}
      </h3>
      <p className="text-gray-300 mb-4 line-clamp-3">
        {post.excerpt}
      </p>
      <div className="flex items-center text-yellow-400 font-semibold">
        <span>Read More</span>
        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </article>
);

const BlogDetail = ({ post, onBack }) => (
  <div className="min-h-screen bg-black text-white">
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 mb-8 transition-colors"
      >
        <ArrowRight className="w-4 h-4 rotate-180" />
        <span>Back to Blog</span>
      </button>
      
      <article className="max-w-4xl mx-auto">
        <div className="relative mb-8">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-6 text-gray-400 text-sm mb-6">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(post.date).toLocaleDateString('id-ID')}
          </span>
          <span className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {post.author}
          </span>
          <span className="flex items-center">
            <Tag className="w-4 h-4 mr-1" />
            {post.category}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          {post.title}
        </h1>
        
        <div 
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  </div>
);

const Home = ({ setActiveTab }) => (
  <div>
    <Hero />
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Latest Articles</h2>
          <p className="text-gray-300 text-lg">Explore my latest projects and insights</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogCard key={post.id} post={post} onClick={() => setActiveTab('blog')} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => setActiveTab('blog')}
            className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            View All Articles
          </button>
        </div>
      </div>
    </section>
  </div>
);

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedPost) {
    return <BlogDetail post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-gray-300 text-lg">Technical articles and project insights</p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none text-white"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-yellow-400 text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} onClick={() => setSelectedPost(post)} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No articles found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Contact = () => (
  <div className="min-h-screen bg-black text-white py-12">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-gray-300 text-lg">Let's connect and collaborate</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
            
            <div className="space-y-6">
              <a
                href="mailto:nostagis8@gmail.com"
                className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group"
              >
                <Mail className="w-6 h-6 text-yellow-400" />
                <div>
                  <h3 className="font-semibold text-white group-hover:text-yellow-400">Email</h3>
                  <p className="text-gray-300">nostagis8@gmail.com</p>
                </div>
              </a>

              <a
                href="https://wa.me/0895336205744"
                className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group"
              >
                <MessageCircle className="w-6 h-6 text-yellow-400" />
                <div>
                  <h3 className="font-semibold text-white group-hover:text-yellow-400">WhatsApp</h3>
                  <p className="text-gray-300">+62 895-3362-05744</p>
                </div>
              </a>

              <a
                href="https://github.com/gunlapar"
                className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group"
              >
                <Github className="w-6 h-6 text-yellow-400" />
                <div>
                  <h3 className="font-semibold text-white group-hover:text-yellow-400">GitHub</h3>
                  <p className="text-gray-300">github.com/gunlapar</p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/gunmori_?igsh=cGN4Nzl4NHpyMnZi"
                className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors group"
              >
                <Instagram className="w-6 h-6 text-yellow-400" />
                <div>
                  <h3 className="font-semibold text-white group-hover:text-yellow-400">Instagram</h3>
                  <p className="text-gray-300">@gunmori_</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none text-white"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-yellow-400 focus:outline-none text-white resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                onClick={() => alert('Contact form submitted!')}
                className="w-full bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-900 border-t border-gray-800 py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-sm">G</span>
          </div>
          <span className="text-white font-bold text-lg">Gunmori</span>
        </div>
        
        <div className="flex space-x-4">
          <a href="https://github.com/gunlapar" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/gunmori_?igsh=cGN4Nzl4NHpyMnZi" className="text-gray-400 hover:text-white transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://wa.me/0895336205744" className="text-gray-400 hover:text-white transition-colors">
            <MessageCircle className="w-5 h-5" />
          </a>
          <a href="mailto:nostagis8@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2024 Gunmori. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-in;
        }
        .animate-fade-in-delay {
          animation: fadeIn 1s ease-in 0.3s both;
        }
        .animate-fade-in-delay-2 {
          animation: fadeIn 1s ease-in 0.6s both;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .prose h2 {
          color: #fbbf24;
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose p {
          color: #d1d5db;
          margin-bottom: 1rem;
          line-height: 1.7;
        }
        .prose pre {
          background: #1f2937;
          color: #e5e7eb;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1rem 0;
        }
        .prose code {
          background: #374151;
          color: #fbbf24;
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main>
        {renderContent()}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;