import React from 'react';
import { Palette, BookOpen, Users, Mountain, Calendar, Sparkles, MapPin, Quote, Wind, Waves, Sun } from 'lucide-react';
import EmailForm from './components/EmailForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-4.0.3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
        <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-4 flex items-center justify-center">
            <Wind className="w-8 h-8 text-white/80 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Create in Tranquility</h1>
          <p className="text-xl md:text-2xl mb-8">Join our art & science sanctuary in Colares, where the Atlantic meets the mountains of Sintra Natural Park</p>
          <EmailForm />
        </div>
      </div>

      {/* Inspiring Quote */}
      <div className="py-16 bg-gradient-to-r from-stone-50 to-blue-50/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Quote className="w-12 h-12 text-stone-600 mx-auto mb-6" />
          <p className="text-2xl md:text-3xl font-serif italic text-gray-700 mb-4">
            "In nature, we find silence – the artist's true condition for creativity."
          </p>
          <p className="text-gray-600">- Agnes Martin</p>
        </div>
      </div>

      {/* Features */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">A Space for Creation</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Find inspiration in the serene environment where nature, art, and science converge
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Waves className="w-8 h-8" />, title: "Ocean Proximity", desc: "Create steps away from the Atlantic coastline" },
              { icon: <Mountain className="w-8 h-8" />, title: "Natural Setting", desc: "Surrounded by Sintra's mystical forests" },
              { icon: <Users className="w-8 h-8" />, title: "Intimate Community", desc: "Small group of dedicated creators" },
              { icon: <Sun className="w-8 h-8" />, title: "Daily Practice", desc: "Structured time for focused work" }
            ].map((feature, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-block p-3 bg-gradient-to-br from-stone-100 to-blue-50 rounded-full text-stone-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Location Highlights */}
      <div className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Peaceful Setting</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover the natural wonders that will inspire your creative journey
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1590452224879-867e8012a828?ixlib=rb-4.0.3",
                title: "Cabo da Roca",
                desc: "Europe's westernmost point, where land meets the infinite horizon"
              },
              {
                image: "https://images.unsplash.com/photo-1592509255531-161181e0cb8d?ixlib=rb-4.0.3",
                title: "Praia da Ursa",
                desc: "Hidden beach with dramatic cliffs and pristine waters"
              },
              {
                image: "https://images.unsplash.com/photo-1583243552820-8f4f6a3b5929?ixlib=rb-4.0.3",
                title: "Sintra Forest",
                desc: "Ancient woodland trails for contemplative walks"
              }
            ].map((place, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={place.image}
                    alt={place.title}
                    className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{place.title}</h3>
                  <p className="text-sm text-gray-200">{place.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Program Details */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Program Details</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-stone-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">2-Week Creative Retreat</h3>
                <p className="text-gray-600">Immerse yourself in a thoughtfully paced program that allows for deep focus and creative exploration in harmony with nature.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-stone-50 to-blue-50/50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-stone-600" />
                  Private accommodation in Colares
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-stone-600" />
                  Daily meditation and creative sessions
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-stone-600" />
                  Access to personal studio space
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-stone-600" />
                  Guided nature walks and beach visits
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-stone-600" />
                  Small group discussions and workshops
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-stone-600" />
                  Organic meals and refreshments
                </li>
              </ul>
              <div className="mt-8">
                <span className="text-sm text-gray-600">Investment</span>
                <div className="text-3xl font-bold text-stone-700">€1,000</div>
                <span className="text-sm text-gray-600">for 2 weeks of focused creation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-4.0.3")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Creative Sanctuary</h2>
          <p className="text-xl mb-8">Reserve your space in our next intimate gathering</p>
          <EmailForm />
        </div>
      </div>
    </div>
  );
}

export default App;