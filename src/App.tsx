import React, { useState } from 'react';
import { Menu, Globe, Users, BookOpen, MessageCircle, Search, Filter, Star, MapPin, Calendar, Clock, ArrowRight, CheckCircle, TrendingUp, Heart, Award, Target } from 'lucide-react';

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }: { currentPage: string; setCurrentPage: (page: string) => void }) => {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Opportunity Pulse
            </span>
          </div>
          
          <div className="hidden md:flex space-x-1">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                currentPage === 'home' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage('programs')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                currentPage === 'programs' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
              }`}
            >
              Programs
            </button>
            <button 
              onClick={() => setCurrentPage('community')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                currentPage === 'community' 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
              }`}
            >
              Community
            </button>
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Menu size={24} className="text-gray-700" />
          </button>
        </div>
      </div>
    </nav>
  );
};

// Homepage Component
const Homepage = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-white/20">
              <Globe className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-gray-700">Connecting 50+ Countries Worldwide</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Diaspora
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Communities Globally
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Connect, learn, and grow with opportunities designed for global diaspora communities. 
              Access programs, mentorship, and resources wherever you are in your journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center">
                Join Programs
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-200 flex items-center">
                Explore Opportunities
                <Search className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </button>
              <button className="group bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center">
                Connect with Community
                <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Global Map Visual */}
          <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
            <div className="flex items-center justify-center h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl">
              <div className="text-center">
                <Globe size={80} className="text-blue-600 mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-700">Global Community Network</p>
                <p className="text-sm text-gray-500">Interactive map visualization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
                <div className="text-5xl font-bold text-blue-600 mb-2">25,000+</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">Active Members</div>
                <div className="text-sm text-gray-500">Growing daily across all continents</div>
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg">
                <div className="text-5xl font-bold text-purple-600 mb-2">150+</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">Programs Available</div>
                <div className="text-sm text-gray-500">Across tech, business, and arts</div>
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-200">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg">
                <div className="text-5xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">Countries Represented</div>
                <div className="text-sm text-gray-500">From every major region</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from community members who transformed their lives through our platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SK</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Sarah Kone</h3>
                  <p className="text-gray-600">Software Engineer</p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    Nigeria → Silicon Valley, USA
                  </div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                "The tech mentorship program was life-changing. Within 6 months, I transitioned from 
                my home country's education system to landing my first software engineering role at a 
                major tech company in Silicon Valley. The community support was incredible."
              </p>
              <div className="flex items-center text-sm text-blue-600 font-semibold">
                <CheckCircle className="w-4 h-4 mr-2" />
                Completed: Tech Career Bootcamp
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AM</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Ahmed Mansour</h3>
                  <p className="text-gray-600">Business Owner</p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    Lebanon → Toronto, Canada
                  </div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                "Through the diaspora business network, I connected with other entrepreneurs and 
                got the mentorship I needed to scale my consulting business across three countries. 
                The platform opened doors I never knew existed."
              </p>
              <div className="flex items-center text-sm text-purple-600 font-semibold">
                <CheckCircle className="w-4 h-4 mr-2" />
                Completed: Business Network Program
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Patterns Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Celebrating Global Diversity</h2>
            <div className="grid grid-cols-12 gap-2 max-w-2xl mx-auto mb-8">
              {Array.from({ length: 48 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`aspect-square rounded-sm ${
                    i % 4 === 0 ? 'bg-blue-400' : 
                    i % 4 === 1 ? 'bg-purple-400' : 
                    i % 4 === 2 ? 'bg-green-400' : 'bg-yellow-400'
                  }`}
                ></div>
              ))}
            </div>
            <p className="text-lg text-gray-600">
              Every pattern represents a unique cultural background in our community
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Programs Component
const ProgramsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filters = ['All', 'Tech', 'Business', 'Mentorship', 'Education', 'Arts'];
  
  const programs = [
    { 
      title: 'Tech Career Bootcamp', 
      category: 'Tech', 
      duration: '12 weeks', 
      featured: true,
      description: 'Comprehensive program covering full-stack development, system design, and interview preparation.',
      participants: 1250,
      rating: 4.9,
      level: 'Beginner to Advanced'
    },
    { 
      title: 'Diaspora Business Network', 
      category: 'Business', 
      duration: '6 months', 
      featured: false,
      description: 'Connect with successful diaspora entrepreneurs and learn proven business strategies.',
      participants: 890,
      rating: 4.8,
      level: 'Intermediate'
    },
    { 
      title: '1-on-1 Leadership Mentoring', 
      category: 'Mentorship', 
      duration: '3 months', 
      featured: true,
      description: 'Personal mentorship with industry leaders to accelerate your career growth.',
      participants: 450,
      rating: 5.0,
      level: 'All Levels'
    },
    { 
      title: 'Digital Skills for Refugees', 
      category: 'Education', 
      duration: '8 weeks', 
      featured: false,
      description: 'Essential digital literacy and online communication skills for new arrivals.',
      participants: 2100,
      rating: 4.7,
      level: 'Beginner'
    },
    { 
      title: 'Creative Arts Collective', 
      category: 'Arts', 
      duration: 'Ongoing', 
      featured: false,
      description: 'Showcase your artistic talents and collaborate with creatives worldwide.',
      participants: 680,
      rating: 4.6,
      level: 'All Levels'
    },
    { 
      title: 'Women in STEM Initiative', 
      category: 'Tech', 
      duration: '16 weeks', 
      featured: true,
      description: 'Empowering women in science, technology, engineering, and mathematics fields.',
      participants: 950,
      rating: 4.9,
      level: 'All Levels'
    },
  ];

  const filteredPrograms = programs.filter(program => {
    const matchesFilter = selectedFilter === 'All' || program.category === selectedFilter;
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-16 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Programs & Opportunities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover programs designed to accelerate your personal and professional growth, 
            tailored for diaspora communities worldwide.
          </p>
        </div>
      </section>
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search programs, skills, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <span className="text-sm font-semibold text-gray-700">Filter:</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-6">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    selectedFilter === filter 
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Programs Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <TrendingUp className="w-6 h-6 text-yellow-500 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Featured Programs</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {filteredPrograms.filter(p => p.featured).map((program, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-yellow-200">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                    <BookOpen size={48} className="text-yellow-600" />
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {program.category}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-semibold text-gray-700">{program.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      Duration: {program.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2" />
                      {program.participants.toLocaleString()} participants
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Target className="w-4 h-4 mr-2" />
                      Level: {program.level}
                    </div>
                  </div>
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 transform group-hover:scale-105 flex items-center justify-center">
                    Apply Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Programs Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Programs</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <BookOpen size={48} className="text-gray-500 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {program.category}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-semibold text-gray-700">{program.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      Duration: {program.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2" />
                      {program.participants.toLocaleString()} participants
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Target className="w-4 h-4 mr-2" />
                      Level: {program.level}
                    </div>
                  </div>
                  <button className="w-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-900 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

// Community Component
const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const discussions = [
    {
      title: 'Tech Career Transition Tips for New Immigrants',
      author: 'Maria Santos',
      avatar: 'MS',
      replies: 23,
      timeAgo: '2 hours ago',
      category: 'Career',
      excerpt: 'Looking for advice on how to leverage my engineering background from my home country...',
      likes: 45
    },
    {
      title: 'Small Business Funding Options for Diaspora Entrepreneurs',
      author: 'Ahmed Khalil',
      avatar: 'AK',
      replies: 18,
      timeAgo: '5 hours ago',
      category: 'Business',
      excerpt: 'Has anyone successfully applied for microloans as a diaspora entrepreneur? Share your experience...',
      likes: 32
    },
    {
      title: 'Cultural Integration While Maintaining Identity',
      author: 'Sarah Liu',
      avatar: 'SL',
      replies: 31,
      timeAgo: '1 day ago',
      category: 'Culture',
      excerpt: 'Sharing experiences about maintaining cultural identity while adapting to new environments...',
      likes: 67
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Heart className="w-5 h-5 mr-2" />
            <span className="font-semibold">Join Our Global Family</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">Community</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Connect with diaspora communities worldwide. Share experiences, get support, 
            and build meaningful relationships that transcend borders.
          </p>
        </div>
      </section>
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Community Stats */}
        <section className="mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Join Our Global Community</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-2xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">25,847</div>
                    <div className="text-sm font-semibold text-gray-700">Active Members</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-2xl">
                    <div className="text-3xl font-bold text-purple-600 mb-2">1,234</div>
                    <div className="text-sm font-semibold text-gray-700">Monthly Discussions</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-2xl">
                    <div className="text-3xl font-bold text-green-600 mb-2">127</div>
                    <div className="text-sm font-semibold text-gray-700">Countries</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-2xl">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">45</div>
                    <div className="text-sm font-semibold text-gray-700">Interest Groups</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 text-center">
                <Users size={80} className="text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Network</h3>
                <p className="text-gray-600 leading-relaxed">
                  Connect with professionals, entrepreneurs, students, and community leaders 
                  from every corner of the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Community Benefits</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Networking</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with diaspora professionals, entrepreneurs, and community leaders 
                across industries and countries. Build relationships that open doors.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Knowledge Sharing</h3>
              <p className="text-gray-600 leading-relaxed">
                Access exclusive resources, guides, and insights shared by community 
                members and expert mentors from around the world.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Targeted Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Get help with specific challenges related to immigration, career 
                transitions, cultural adaptation, and professional development.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Exclusive Opportunities</h3>
              <p className="text-gray-600 leading-relaxed">
                Discover job openings, collaboration projects, investment opportunities, 
                and exclusive events shared within the community.
              </p>
            </div>
          </div>
        </section>

        {/* Community Content Tabs */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('discussions')}
                  className={`px-8 py-4 font-semibold transition-colors ${
                    activeTab === 'discussions'
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Recent Discussions
                </button>
                <button
                  onClick={() => setActiveTab('groups')}
                  className={`px-8 py-4 font-semibold transition-colors ${
                    activeTab === 'groups'
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Interest Groups
                </button>
              </div>
            </div>

            <div className="p-8">
              {activeTab === 'discussions' && (
                <div className="space-y-6">
                  {discussions.map((discussion, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{discussion.avatar}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                              {discussion.category}
                            </span>
                            <span className="text-sm text-gray-500">{discussion.timeAgo}</span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer transition-colors">
                            {discussion.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {discussion.excerpt}
                          </p>
                          <div className="flex items-center space-x-6 text-sm text-gray-500">
                            <span className="font-semibold">by {discussion.author}</span>
                            <div className="flex items-center">
                              <MessageCircle className="w-4 h-4 mr-1" />
                              {discussion.replies} replies
                            </div>
                            <div className="flex items-center">
                              <Heart className="w-4 h-4 mr-1" />
                              {discussion.likes} likes
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'groups' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { name: 'Tech Professionals', members: 5420, icon: '💻' },
                    { name: 'Entrepreneurs', members: 3210, icon: '🚀' },
                    { name: 'Healthcare Workers', members: 2890, icon: '🏥' },
                    { name: 'Creative Arts', members: 1560, icon: '🎨' },
                    { name: 'Students & Academics', members: 4320, icon: '📚' },
                    { name: 'Parents & Families', members: 2100, icon: '👨‍👩‍👧‍👦' }
                  ].map((group, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors cursor-pointer">
                      <div className="text-4xl mb-4">{group.icon}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{group.name}</h3>
                      <p className="text-sm text-gray-600">{group.members.toLocaleString()} members</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              Create your free account and start connecting with diaspora communities worldwide. 
              No commitment required – explore first, engage when you're ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                Join Community
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-transparent text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 border-2 border-white hover:bg-white hover:text-blue-600 flex items-center justify-center">
                Browse Topics First
                <Search className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Homepage />;
      case 'programs':
        return <ProgramsPage />;
      case 'community':
        return <CommunityPage />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {/* Accessibility Notice */}
      <div className="bg-green-50 border-b border-green-200 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
            <p className="text-sm font-semibold text-green-800">
              🌐 ACCESSIBILITY: This platform supports screen readers, keyboard navigation, 
              and is available in multiple languages. Contact support for assistance.
            </p>
          </div>
        </div>
      </div>

      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Opportunity Pulse</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Empowering diaspora communities globally through connection, opportunity, 
                and shared growth. Building bridges across cultures and continents.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Accessibility</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-400" />
                  WCAG 2.1 AA Compliant
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-400" />
                  Screen Reader Optimized
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-400" />
                  Keyboard Navigation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-3 text-green-400" />
                  High Contrast Support
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Languages</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors text-left">
                  🇺🇸 English
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors text-left">
                  🇫🇷 Français
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors text-left">
                  🇸🇦 العربية
                </button>
                <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors text-left">
                  🇪🇸 Español
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Opportunity Pulse. Empowering diaspora communities worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;