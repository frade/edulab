import React from 'react';
import { Palette, BookOpen, Users, Mountain, Calendar } from 'lucide-react';
import EmailForm from './components/EmailForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1605969353711-234dea348ce1?ixlib=rb-4.0.3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Art & Science in Portugal</h1>
          <p className="text-xl md:text-2xl mb-8">A unique 2-week immersive experience combining art, science, and Portuguese culture in the magical setting of Sintra</p>
          <EmailForm />
        </div>
      </div>

      {/* Features */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Program Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Palette className="w-8 h-8" />, title: "Artistic Expression", desc: "Workshops led by renowned artists" },
              { icon: <BookOpen className="w-8 h-8" />, title: "Scientific Discovery", desc: "Engaging lectures and hands-on experiments" },
              { icon: <Users className="w-8 h-8" />, title: "Cultural Exchange", desc: "Connect with like-minded creators" },
              { icon: <Mountain className="w-8 h-8" />, title: "Natural Beauty", desc: "Explore Sintra's stunning landscapes" }
            ].map((feature, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="inline-block p-3 bg-teal-100 rounded-full text-teal-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
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
              <Calendar className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">2-Week Immersive Experience</h3>
                <p className="text-gray-600">Join us for an intensive program that combines art, science, and cultural exploration in the heart of Portugal.</p>
              </div>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Professional workshops and lectures</li>
                <li>• Accommodation in beautiful Sintra</li>
                <li>• Guided hiking tours</li>
                <li>• Cultural excursions</li>
                <li>• Art materials and supplies</li>
                <li>• Community events and networking</li>
              </ul>
              <div className="mt-6 text-2xl font-bold text-teal-700">$1,000 for 2 weeks</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-teal-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8">Be the first to know when applications open for our next program</p>
          <EmailForm />
        </div>
      </div>
    </div>
  );
}

export default App;