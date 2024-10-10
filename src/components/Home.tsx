import React from 'react';
import { ArrowRight, Users, Palette, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      // ... (keep the existing translations)
    },
    zh: {
      // ... (keep the existing translations)
    }
  };

  const t = translations[language];

  return (
    <div className="bg-gray-100">
      {/* ... (keep the existing Hero, Quick Links, and Featured Products sections) */}

      {/* Why Choose StarbornHub Section */}
      <section className="py-16 bg-why-choose bg-cover bg-center text-white">
        <div className="container mx-auto px-4">
          <div className="bg-black bg-opacity-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">{t.whyChoose.title}</h2>
            <p className="text-xl text-center mb-12">{t.whyChoose.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Users size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p>Connect with top designers and retailers</p>
              </div>
              <div className="text-center">
                <Palette size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p>Access cutting-edge designs and trends</p>
              </div>
              <div className="text-center">
                <ShoppingBag size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Growth</h3>
                <p>Expand your business with new opportunities</p>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <a href="#" className="btn btn-secondary">{t.whyChoose.cta.primary}</a>
              <a href="#" className="btn btn-secondary">{t.whyChoose.cta.secondary}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;