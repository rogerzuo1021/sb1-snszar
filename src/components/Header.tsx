import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const navItems = [
    { label: { en: 'Home', zh: '首页' }, href: '#' },
    { label: { en: 'Design Lab', zh: '设计实验室' }, href: '#' },
    { label: { en: 'Fabric', zh: '面料' }, href: '#' },
    { label: { en: 'Products', zh: '产品' }, href: '#' },
    { label: { en: 'Q&C', zh: '质量与认证' }, href: '#' },
    { label: { en: 'Account', zh: '账户' }, href: '#' },
    { label: { en: 'Blog', zh: '博客' }, href: '#' },
  ];

  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white text-shadow">StarbornHub</h1>
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className="text-white hover:text-blue-200 text-shadow">
                {item.label[language]}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-2">
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              {language === 'en' ? 'Register' : '注册'}
            </a>
            <a href="#" className="bg-transparent text-white px-4 py-2 rounded-full border border-white hover:bg-white hover:text-blue-600 transition duration-300">
              {language === 'en' ? 'Login' : '登录'}
            </a>
            <button
              onClick={toggleLanguage}
              className="bg-transparent text-white px-3 py-1 rounded-full border border-white hover:bg-white hover:text-blue-600 transition duration-300"
            >
              {language === 'en' ? '中文' : 'EN'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;