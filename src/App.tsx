import React, { useState } from 'react';
import { Menu, Globe, Users, BookOpen, MessageCircle, Search, Filter, Star, MapPin, Calendar, Clock, ArrowRight, CheckCircle, TrendingUp, Heart, Award, Target, Eye, EyeOff, Mail, Lock, User } from 'lucide-react';

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

          <div className="hidden md:flex items-center space-x-3">
            <button 
              onClick={() => setCurrentPage('signin')}
              className="px-6 py-2 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all duration-200"
            >
              Sign In
            </button>
            <button 
              onClick={() => setCurrentPage('signup')}
              className="px-6 py-2 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-md"
            >
              Sign Up
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

      {/* Programs Showcase Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover programs designed to accelerate your personal and professional growth
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <BookOpen size={48} className="text-blue-600" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Tech
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-semibold text-gray-700">4.9</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Tech Career Bootcamp
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Comprehensive program covering full-stack development and interview preparation.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  12 weeks • 1,250 participants
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <Target size={48} className="text-purple-600" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Business
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-semibold text-gray-700">4.8</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Diaspora Business Network
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Connect with successful entrepreneurs and learn proven business strategies.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  6 months • 890 participants
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <Users size={48} className="text-green-600" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Mentorship
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-semibold text-gray-700">5.0</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  1-on-1 Leadership Mentoring
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Personal mentorship with industry leaders to accelerate your career growth.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  3 months • 450 participants
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-all duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => setCurrentPage('programs')}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center mx-auto"
            >
              View All Programs
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Community Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Global Community</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with diaspora professionals, entrepreneurs, and community leaders worldwide
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-4xl font-bold text-blue-600 mb-2">25,847</div>
                  <div className="text-sm font-semibold text-gray-700">Active Members</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-4xl font-bold text-purple-600 mb-2">1,234</div>
                  <div className="text-sm font-semibold text-gray-700">Monthly Discussions</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-4xl font-bold text-green-600 mb-2">127</div>
                  <div className="text-sm font-semibold text-gray-700">Countries</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">45</div>
                  <div className="text-sm font-semibold text-gray-700">Interest Groups</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Global networking opportunities</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Expert mentorship and guidance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Career and business support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Cultural integration resources</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">SK</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-bold text-gray-900">Sarah Kone</h4>
                      <span className="text-sm text-gray-500">• 2 hours ago</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      "Just landed my first tech role in Silicon Valley! The mentorship program was incredible..."
                    </p>
                    <div className="flex items-center mt-3 text-sm text-gray-500">
                      <Heart className="w-4 h-4 mr-1" />
                      <span className="mr-4">23 likes</span>
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span>8 replies</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AM</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-bold text-gray-900">Ahmed Mansour</h4>
                      <span className="text-sm text-gray-500">• 5 hours ago</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      "Looking for co-founders for my fintech startup. Anyone with experience in..."
                    </p>
                    <div className="flex items-center mt-3 text-sm text-gray-500">
                      <Heart className="w-4 h-4 mr-1" />
                      <span className="mr-4">15 likes</span>
                      <MessageCircle className="w-4 h-4 mr-1" />
                      <span>12 replies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => setCurrentPage('community')}
              className="group bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center mx-auto"
            >
              Join Community
              <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-gray-50">
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

// Sign In Component
const SignInPage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your Opportunity Pulse account</p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <button type="button" className="text-sm text-blue-600 hover:text-blue-700 font-semibold">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={() => setCurrentPage('signup')}
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Sign up here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sign Up Component
const SignUpPage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Our Community</h1>
            <p className="text-gray-600">Create your Opportunity Pulse account</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                    placeholder="First name"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                  placeholder="Confirm your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="agreeToTerms"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                required
              />
              <label htmlFor="agreeToTerms" className="ml-3 text-sm text-gray-600">
                I agree to the{' '}
                <button type="button" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Terms of Service
                </button>{' '}
                and{' '}
                <button type="button" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Privacy Policy
                </button>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Create Account
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => setCurrentPage('signin')}
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Sign in here
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Programs Page Component
const ProgramsPage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const categories = ['All', 'Tech', 'Business', 'Mentorship', 'Education', 'Arts', 'Healthcare'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const programs = [
    {
      id: 1,
      title: 'Full-Stack Web Development Bootcamp',
      category: 'Tech',
      level: 'Beginner',
      duration: '16 weeks',
      participants: 1250,
      rating: 4.9,
      description: 'Comprehensive program covering React, Node.js, databases, and deployment.',
      featured: true,
      trending: true
    },
    {
      id: 2,
      title: 'Diaspora Business Leadership',
      category: 'Business',
      level: 'Intermediate',
      duration: '8 weeks',
      participants: 890,
      rating: 4.8,
      description: 'Learn to build and scale businesses across multiple markets.',
      featured: true,
      trending: false
    },
    {
      id: 3,
      title: 'AI & Machine Learning Fundamentals',
      category: 'Tech',
      level: 'Intermediate',
      duration: '12 weeks',
      participants: 675,
      rating: 4.7,
      description: 'Introduction to AI concepts, Python programming, and ML algorithms.',
      featured: false,
      trending: true
    },
    {
      id: 4,
      title: 'Cross-Cultural Communication',
      category: 'Education',
      level: 'Beginner',
      duration: '6 weeks',
      participants: 1100,
      rating: 4.9,
      description: 'Master communication skills for global professional environments.',
      featured: false,
      trending: false
    },
    {
      id: 5,
      title: 'Digital Marketing Mastery',
      category: 'Business',
      level: 'Intermediate',
      duration: '10 weeks',
      participants: 950,
      rating: 4.6,
      description: 'Complete guide to digital marketing strategies and tools.',
      featured: false,
      trending: true
    },
    {
      id: 6,
      title: '1-on-1 Career Mentorship',
      category: 'Mentorship',
      level: 'All',
      duration: '3 months',
      participants: 450,
      rating: 5.0,
      description: 'Personal mentorship with industry leaders in your field.',
      featured: true,
      trending: false
    }
  ];

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || program.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || program.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const featuredPrograms = filteredPrograms.filter(program => program.featured);
  const trendingPrograms = filteredPrograms.filter(program => program.trending);
  const regularPrograms = filteredPrograms.filter(program => !program.featured && !program.trending);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Discover Your Next
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Opportunity
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore programs designed to accelerate your personal and professional growth
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search programs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div className="flex gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Featured Programs */}
          {featuredPrograms.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <Award className="w-6 h-6 text-yellow-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Featured Programs</h2>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {featuredPrograms.map(program => (
                  <div key={program.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 relative">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        Featured
                      </span>
                    </div>
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <BookOpen size={48} className="text-blue-600" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          program.category === 'Tech' ? 'bg-blue-100 text-blue-800' :
                          program.category === 'Business' ? 'bg-purple-100 text-purple-800' :
                          program.category === 'Mentorship' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
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
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {program.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {program.participants} participants
                        </div>
                      </div>
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-200">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Trending Programs */}
          {trendingPrograms.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center mb-8">
                <TrendingUp className="w-6 h-6 text-green-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Trending Programs</h2>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {trendingPrograms.map(program => (
                  <div key={program.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 relative">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        Trending
                      </span>
                    </div>
                    <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                      <Target size={48} className="text-purple-600" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          program.category === 'Tech' ? 'bg-blue-100 text-blue-800' :
                          program.category === 'Business' ? 'bg-purple-100 text-purple-800' :
                          program.category === 'Mentorship' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {program.category}
                        </span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-sm font-semibold text-gray-700">{program.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {program.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {program.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {program.participants} participants
                        </div>
                      </div>
                      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-200">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Programs */}
          {regularPrograms.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">All Programs</h2>
              <div className="grid lg:grid-cols-3 gap-8">
                {regularPrograms.map(program => (
                  <div key={program.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200">
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <BookOpen size={48} className="text-gray-600" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          program.category === 'Tech' ? 'bg-blue-100 text-blue-800' :
                          program.category === 'Business' ? 'bg-purple-100 text-purple-800' :
                          program.category === 'Mentorship' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
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
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {program.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {program.participants} participants
                        </div>
                      </div>
                      <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-xl font-semibold transition-all duration-200">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredPrograms.length === 0 && (
            <div className="text-center py-16">
              <Search size={64} className="text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No programs found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or browse all programs.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

// Community Page Component
const CommunityPage = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  const [activeTab, setActiveTab] = useState('discussions');

  const discussions = [
    {
      id: 1,
      author: 'Sarah Kone',
      avatar: 'SK',
      title: 'Just landed my first tech role in Silicon Valley!',
      content: 'The mentorship program was incredible. Special thanks to everyone who helped me prepare for interviews...',
      timestamp: '2 hours ago',
      likes: 23,
      replies: 8,
      category: 'Success Stories'
    },
    {
      id: 2,
      author: 'Ahmed Mansour',
      avatar: 'AM',
      title: 'Looking for co-founders for my fintech startup',
      content: 'Anyone with experience in financial services or blockchain technology? Would love to connect...',
      timestamp: '5 hours ago',
      likes: 15,
      replies: 12,
      category: 'Entrepreneurship'
    },
    {
      id: 3,
      author: 'Maria Rodriguez',
      avatar: 'MR',
      title: 'Cultural integration tips for new immigrants',
      content: 'After 3 years in Canada, here are some insights that helped me navigate the cultural transition...',
      timestamp: '1 day ago',
      likes: 45,
      replies: 23,
      category: 'Cultural Integration'
    }
  ];

  const interestGroups = [
    {
      id: 1,
      name: 'Tech Professionals',
      members: 5420,
      description: 'Connect with diaspora professionals in technology',
      color: 'blue'
    },
    {
      id: 2,
      name: 'Entrepreneurs Network',
      members: 3210,
      description: 'Share experiences and build businesses together',
      color: 'purple'
    },
    {
      id: 3,
      name: 'Cultural Exchange',
      members: 7890,
      description: 'Celebrate and share our diverse cultural backgrounds',
      color: 'green'
    },
    {
      id: 4,
      name: 'Career Mentorship',
      members: 2150,
      description: 'Mentors and mentees supporting career growth',
      color: 'yellow'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Join Our Global
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {' '}Community
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Connect with diaspora professionals, entrepreneurs, and community leaders worldwide
          </p>

          {/* Community Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">25,847</div>
              <div className="text-sm font-semibold text-gray-700">Active Members</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">1,234</div>
              <div className="text-sm font-semibold text-gray-700">Monthly Discussions</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">127</div>
              <div className="text-sm font-semibold text-gray-700">Countries</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl font-bold text-yellow-600 mb-2">45</div>
              <div className="text-sm font-semibold text-gray-700">Interest Groups</div>
            </div>
          </div>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Join Community Now
          </button>
        </div>
      </section>

      {/* Community Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
              <button
                onClick={() => setActiveTab('discussions')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === 'discussions'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Recent Discussions
              </button>
              <button
                onClick={() => setActiveTab('groups')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === 'groups'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Interest Groups
              </button>
            </div>
          </div>

          {/* Discussions Tab */}
          {activeTab === 'discussions' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Discussions</h2>
                <p className="text-gray-600">Join conversations happening in our community</p>
              </div>
              
              {discussions.map(discussion => (
                <div key={discussion.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{discussion.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-bold text-gray-900">{discussion.author}</h4>
                        <span className="text-sm text-gray-500">• {discussion.timestamp}</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
                          {discussion.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{discussion.title}</h3>
                      <p className="text-gray-600 mb-4">{discussion.content}</p>
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <button className="flex items-center hover:text-purple-600 transition-colors">
                          <Heart className="w-4 h-4 mr-1" />
                          {discussion.likes} likes
                        </button>
                        <button className="flex items-center hover:text-purple-600 transition-colors">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {discussion.replies} replies
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Interest Groups Tab */}
          {activeTab === 'groups' && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Interest Groups</h2>
                <p className="text-gray-600">Find your community within our community</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {interestGroups.map(group => (
                  <div key={group.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                        group.color === 'blue' ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                        group.color === 'purple' ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                        group.color === 'green' ? 'bg-gradient-to-br from-green-400 to-green-600' :
                        'bg-gradient-to-br from-yellow-400 to-yellow-600'
                      }`}>
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{group.name}</h3>
                        <p className="text-gray-600 mb-3">{group.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{group.members.toLocaleString()} members</span>
                          <button className={`px-4 py-2 rounded-lg font-semibold text-white transition-all duration-200 ${
                            group.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                            group.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700' :
                            group.color === 'green' ? 'bg-green-600 hover:bg-green-700' :
                            'bg-yellow-600 hover:bg-yellow-700'
                          }`}>
                            Join Group
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'programs':
        return <ProgramsPage setCurrentPage={setCurrentPage} />;
      case 'community':
        return <CommunityPage setCurrentPage={setCurrentPage} />;
      case 'signin':
        return <SignInPage setCurrentPage={setCurrentPage} />;
      case 'signup':
        return <SignUpPage setCurrentPage={setCurrentPage} />;
      default:
        return <Homepage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;