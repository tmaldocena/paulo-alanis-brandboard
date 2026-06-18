/* eslint-disable react-hooks/purity */
import React, { useState, useEffect } from 'react';
import { Download, Copy, Check, FileDown } from 'lucide-react';
import LogoComponent from './components/LogoComponent';

// ============================================
// EDITABLE DATA - MODIFY THIS FOR EACH CLIENT
// ============================================
const brandData = {
  meta: {
    version: "V1.1",
    delivery: "January 2026"
  },
  
  // DESIGN SYSTEM
  design: {
    // Primary font - Google Fonts or local
    primaryFont: {
      name: "Comfortaa",
      googleFontsUrl: "https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap",
      // If using local font, leave googleFontsUrl empty and add font files to /public/fonts/
      localPath: null
    },
    // Background colors for sections
    backgroundColor: "#F8FAFC", // Main background
    cardBackgroundLight: "#FFFFFF", // Light cards
    cardBackgroundDark: "#0A0E1A", // Dark cards/accents
  },
  
  identity: {
    brandName: "Paulo Alanis",
    brandNameSecondary: "",
    tagline: "A shared personal experience. The voice of someone who crossed the threshold of immigration and is now part of a community of migrants living and building a positive life in the United States.",
    logoText: "PA",
    logoSubtext: "Paulo Alanis",
    designer: "Maguito Studio",
    client: "Paulo Alanis"
  },
  
  foundations: {
    mission: {
      title: "OUR MISSION",
      text: "To share authentic, relatable, and optimistic content that reflects the migrant experience, supporting and inspiring those seeking to build their own path in the migrant experience and in the pursuit of the American dream."
    },
    vision: {
      title: "OUR VISION",
      text: "Create content that entertains but also educates and inspires, telling real stories of immigration and offering practical tools that help people understand the migration process and make informed decisions."
    },
    values: {
      title: "OUR VALUES",
      text: "Trust, through clear and honest communication. Community, to support and create a space where people feel like they belong. Optimism, conveying a hopeful yet realistic view of the future. Generosity, sharing information, experiences, and knowledge with the intention of helping others."
    }
  },
  
  colors: [
    {
      name: "YALE BLUE",
      hex: "#004777",
      rgb: "0, 71, 119",
      cmyk: "100, 40, 0, 53",
      usage: "Primary brand color for digital applications",
      isPrimary: true // This will be used as accent color
    },
    {
      name: "COFEE BEAN",
      hex: "#1E0D09",
      rgb: "30, 13, 9",
      cmyk: "30, 70, 80, 55",
      usage: "Primary text and background contrast"
    },
    {
      name: "WHITE IVORY",
      hex: "#F5F4F4",
      rgb: "245, 244, 244",
      cmyk: "1, 1, 0, 0",
      usage: "Light backgrounds and breathing space"
    },
    {
      name: "CHERRY RED",
      hex: "#B31C44",
      rgb: "179, 28, 68",
      cmyk: "15, 100, 55, 20",
      usage: "Accent color for CTAs and emphasis, useful for high-contrast"
    },
    {
      name: "PACIFIC LIGHT BLUE",
      hex: "#47B1CB",
      rgb: "71, 177, 203",
      cmyk: "60, 10, 15, 0",
      usage: "Secondary accent color for highlights and links, soft CTAs."
    }
  ],
  
  typography: {
    primary: {
      name: "Comfortaa Bold",
      weights: "700-900",
      usage: "Headlines, Logos, Bold Statements",
      sample: "AaBbCc",
      description: "The quick brown fox jumps over the lazy dog. a rounded geometric sans-serif type design intended for large sizes. It is absolutely free, both for personal and commercial use."
    },
    secondary: {
      name: "Comfortaa Semibold - Regular",
      weights: "400-600",
      usage: "Body copy, captions, UI elements",
      sample: "abcdefghijklmnopqrstuvwxyz"
    }
  },
  
  logo: {
    primary: {
      title: "PRIMARY MARK",
      description: "Use the contained mark for social profile pictures and favicons where space is restricted to 1:1 ratio."
    },
    spacing: {
      title: "SECONDARY MARK",
      rules: "Minimum clear space = X height of letterforms"
    }
  },
  
  patterns: {
    title: "SIGNATURE MOTION",
    subtitle: "Application: Packaging, Digital Wallpaper, Brand Accents"
  },
  
  mockups: [
    {
      title: "SOCIAL MEDIA",
      description: "Instagram & Social Platform Applications",
      image: "/assets/mockups/mockup-social.webp"
    },
    {
      title: "DIGITAL CONTENT",
      description: "Website & Digital Experience Mockups",
      image: "/assets/mockups/mockup-digital.webp"
    },
    {
      title: "DIGITAL E-BOOK",
      description: "E-Book & Digital Publications",
      image: "/assets/mockups/mockup-ebook.webp"
    }
  ],
  
  downloads: [
    { name: "LOGO SUITE (Updated)", size: "28.9 MB", file: "https://drive.google.com/drive/folders/1Gm9lXXeqpvtZttONzPjt5axcH4d1-GEO?usp=sharing" },
    { name: "BRAND BOOK", size: "220.3 MB", file: "https://drive.google.com/file/d/1S6S9TlPAYbdH0LndtDkqvK9zpcPXAkc4/view?usp=sharing" },
    { name: "TYPOGRAPHY", size: "306 KB", file: "https://drive.google.com/file/d/1noZQUwXiCdOw-Mh2A8z3PQKksCI3vRKd/view?usp=sharing" },
    { name: "COLOR PALETTE", size: "1 KB", file: "https://coolors.co/004777-1e0d09-f5f4f4-b31c44-47b1cb"}
  ]
};

// ============================================
// MAIN COMPONENT
// ============================================
import PendingPayment from './PendingPayment.jsx';

// Set this to false to show the pending payment page
const pending = true;

export default function Brandboard() {
  if (!pending) {
    return <PendingPayment />;
  }
  const [activeSection, setActiveSection] = useState('identity');
  const [copiedColor, setCopiedColor] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  //const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // Get primary accent color
  const primaryColor = brandData.colors.find(c => c.isPrimary)?.hex || brandData.colors[0].hex;

  const generatePDF = () => {
    try {
      // Hide the header/navbar
      const header = document.querySelector('header');
      const originalDisplay = header.style.display;
      header.style.display = 'none';

      // Wait a moment for the DOM to update
      setTimeout(() => {
        // Open print dialog
        window.print();

        // Restore visibility after printing
        setTimeout(() => {
          header.style.display = originalDisplay;
        }, 100);
      }, 100);
      
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error opening the print dialog.');
    }
  };

  const handleDownload = (fileUrl) => {
    // Open Google Drive link in a new tab
    window.open(fileUrl, '_blank');
  };

  useEffect(() => {
    // Load custom font
    if (brandData.design.primaryFont.googleFontsUrl) {
      const link = document.createElement('link');
      link.href = brandData.design.primaryFont.googleFontsUrl;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = (text, colorName) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(colorName);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const getContrastTextColor = (hexColor) => {
    // Convert hex to RGB
    const r = parseInt(hexColor.substr(1, 2), 16);
    const g = parseInt(hexColor.substr(3, 2), 16);
    const b = parseInt(hexColor.substr(5, 2), 16);
    
    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    // Return black text for light backgrounds, white for dark
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div 
      className="min-h-screen"
      style={{ 
        backgroundColor: brandData.design.backgroundColor,
        fontFamily: `'${brandData.design.primaryFont.name}', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
      }}
    >
      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
      style={{ backgroundColor: scrolled ? brandData.design.cardBackgroundLight : 'transparent' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LogoComponent variant="primary" size={32} />
            <span className="font-bold text-gray-900">
              {brandData.identity.brandName}
              <span style={{ color: primaryColor }}>{brandData.identity.brandNameSecondary}</span>
            </span>
            <span className="text-xs text-gray-400 ml-2">{brandData.meta.version}</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {['IDENTITY', 'PALETTE', 'TYPE', 'LOGOS', 'DOWNLOADS'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-xs font-medium tracking-wider transition-colors"
                style={{ 
                  color: activeSection === item.toLowerCase() ? primaryColor : '#6B7280'
                }}
              >
                {item}
              </button>
            ))}
          </nav>

          <button 
            onClick={generatePDF}
            className="px-4 py-2 text-white text-xs font-medium rounded-md hover:opacity-90 transition-opacity flex items-center gap-2"
            style={{ backgroundColor: primaryColor }}
          >
            <FileDown size={16} />
            DOWNLOAD PDF
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-8" id="brandboard-content">
        {/* HERO SECTION */}
        <section id="identity" className="mb-32 grid md:grid-cols-2 gap-12 items-start">
          <div 
            className="rounded-3xl p-16 shadow-sm animate-fade-in"
            style={{ backgroundColor: brandData.design.cardBackgroundLight }}
          >
            <div className="text-center">
              <LogoComponent variant="primary" size={120} style={{ margin: '0 auto 2rem' }} />
              <p className="text-xs text-gray-400 tracking-widest uppercase">
                {brandData.identity.logoSubtext}
              </p>
            </div>
          </div>

          <div className="animate-fade-in-delay">
            <div 
              className="text-xs font-medium tracking-wider mb-4"
              style={{ color: primaryColor }}
            >
              {brandData.meta.delivery}
            </div>
            <h1 className="text-5xl font-black mb-4">
              {brandData.identity.brandName}
              <br />
              <span className="italic" style={{ color: primaryColor }}>
                {brandData.identity.brandNameSecondary}
              </span>
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {brandData.identity.tagline}
            </p>
            <div className="flex gap-8 text-xs">
              <div>
                <div className="text-gray-400 uppercase tracking-wider mb-1">Designer</div>
                <div className="font-medium">{brandData.identity.designer}</div>
              </div>
              <div>
                <div className="text-gray-400 uppercase tracking-wider mb-1">Client</div>
                <div className="font-medium">{brandData.identity.client}</div>
              </div>
            </div>
          </div>
        </section>

        {/* STRATEGIC FOUNDATIONS */}
        <section className="mb-32">
          <div 
            className="text-xs font-medium tracking-wider mb-8"
            style={{ color: primaryColor }}
          >
            01. STRATEGIC FOUNDATIONS
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.values(brandData.foundations).map((item, i) => (
              <div 
                key={i}
                className="rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ 
                  backgroundColor: brandData.design.cardBackgroundLight,
                  animationDelay: `${i * 100}ms` 
                }}
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${primaryColor}10` }}
                >
                  <span className="text-xl">
                    {i === 0 ? '🎯' : i === 1 ? '👁️' : '💎'}
                  </span>
                </div>
                <h3 className="font-bold text-sm mb-3 tracking-wide">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COLOR PALETTE */}
        <section id="palette" className="mb-32">
          <div 
            className="text-xs font-medium tracking-wider mb-8"
            style={{ color: primaryColor }}
          >
            02. COLOR STORY
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {brandData.colors.map((color, i) => (
              <div 
                key={i}
                className="group animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div 
                  className="h-64 rounded-2xl mb-4 relative overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl"
                  style={{ backgroundColor: color.hex }}
                >
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="font-black text-2xl mb-2 drop-shadow-lg" style={{ color: getContrastTextColor(color.hex) }}>
                      {color.name}
                    </div>
                    <div className="flex items-center justify-between bg-black/20 backdrop-blur-sm rounded-lg px-3 py-2">
                      <span className="text-xs font-mono" style={{ color: getContrastTextColor(color.hex) }}>{color.hex}</span>
                      <button
                        onClick={() => copyToClipboard(color.hex, color.name)}
                        className="hover:scale-110 transition-transform"
                        style={{ color: getContrastTextColor(color.hex) }}
                      >
                        {copiedColor === color.name ? <Check size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500">RGB: {color.rgb}</div>
                <div className="text-xs text-gray-500">CMYK: {color.cmyk}</div>
              </div>
            ))}
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section id="type" className="mb-32">
          <div 
            className="text-xs font-medium tracking-wider mb-8"
            style={{ color: primaryColor }}
          >
            03. TYPOGRAPHY SUITE
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div 
              className="rounded-2xl p-12 animate-fade-in"
              style={{ backgroundColor: brandData.design.cardBackgroundLight }}
            >
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-4">
                PRIMARY TYPEFACE • {brandData.typography.primary.weights}
              </div>
              <div className="text-6xl font-black mb-6">
                {brandData.typography.primary.sample}
              </div>
              <div className="text-2xl font-black mb-4">{brandData.typography.primary.name}</div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {brandData.typography.primary.description}
              </p>
            </div>

            <div 
              className="rounded-2xl p-12 text-white animate-fade-in-delay"
              style={{ backgroundColor: brandData.design.cardBackgroundDark }}
            >
              <div className="text-xs text-gray-400 uppercase tracking-wider mb-8">
                CHARACTER SET
              </div>
              <div className="font-black space-y-2">
                <div className="text-3xl">ABCDEFGHIJKLMN</div>
                <div className="text-3xl">OPQRSTUVWXYZ</div>
                <div className="text-2xl opacity-80">abcdefghijklmnop</div>
                <div className="text-2xl opacity-80">qrstuvwxyz</div>
                <div className="text-2xl opacity-60">1234567890!@#$</div>
                <div className="text-xl opacity-60">%^&*()</div>
              </div>
            </div>
          </div>
        </section>

        {/* LOGO CONSTRUCTION */}
        <section id="logos" className="mb-32">
          <div 
            className="text-xs font-medium tracking-wider mb-8"
            style={{ color: primaryColor }}
          >
            04. LOGO CONSTRUCTION & GRID
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div 
              className="rounded-2xl p-16 animate-fade-in"
              style={{ backgroundColor: brandData.design.cardBackgroundLight }}
            >
              <div className="relative">
                <div className="absolute inset-0 grid grid-cols-4 gap-px">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="border border-gray-200"></div>
                  ))}
                </div>
                <div 
                  className="relative flex items-center justify-center py-12"
                >
                  <LogoComponent variant="construction" size={200} />
                </div>
              </div>
              <div className="text-xs text-gray-400 text-center mt-4">
                CONSTRUCTION GRID • 4×4
              </div>
            </div>

            <div className="space-y-6">
              <div 
                className="rounded-2xl p-12 animate-fade-in-delay"
                style={{ backgroundColor: primaryColor }}
              >
                <div className="text-xs text-white/60 uppercase tracking-wider mb-8">
                  {brandData.logo.primary.title}
                </div>
                <div className="flex justify-center mb-6">
                  <LogoComponent variant="primary" size={96} />
                </div>
                <p className="text-sm text-white/80 text-center">
                  {brandData.logo.primary.description}
                </p>
              </div>

              <div 
                className="rounded-2xl p-12 animate-fade-in-delay-2"
                style={{ backgroundColor: brandData.design.cardBackgroundDark }}
              >
                <div className="flex items-center justify-center gap-12">
                  <div className="flex flex-col items-center">
                    <LogoComponent variant="light" size={80} style={{ marginBottom: '0.5rem' }} />
                    <span className="text-xs text-gray-400 mt-2">Light</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <LogoComponent variant="dark" size={80} style={{ marginBottom: '0.5rem' }} />
                    <span className="text-xs text-gray-400 mt-2">Dark</span>
                  </div>
                </div>
                <div className="text-xs text-gray-400 text-center mt-6">DARK/LIGHT VARIATIONS</div>
              </div>
            </div>
          </div>
        </section>

        {/* GRAPHIC PATTERNS */}
        <section className="mb-32">
          <div 
            className="text-xs font-medium tracking-wider mb-8"
            style={{ color: primaryColor }}
          >
            05. GRAPHIC PATTERNS
          </div>
          
          <div 
            className="rounded-3xl p-16 relative overflow-hidden animate-fade-in"
            style={{ backgroundColor: brandData.design.cardBackgroundDark }}
          >
            <div className="absolute inset-0 opacity-10">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.2}s`
                  }}
                >
                  <LogoComponent variant="pattern" size={80} />
                </div>
              ))}
            </div>
            <div className="relative z-10">
              <div className="text-4xl font-black text-white italic mb-2">
                {brandData.patterns.title}
              </div>
              <div className="text-sm text-gray-400">{brandData.patterns.subtitle}</div>
            </div>
          </div>
        </section>

        {/* MOCKUPS */}
        <section className="mb-32">
          <div 
            className="text-xs font-medium tracking-wider mb-8"
            style={{ color: primaryColor }}
          >
            06. MOCKUPS & APPLICATIONS
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {brandData.mockups.map((mockup, i) => (
              <div 
                key={i}
                className="animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div 
                  className="rounded-2xl overflow-hidden mb-4 transition-all duration-300 hover:shadow-xl animate-fade-in"
                  style={{ backgroundColor: brandData.design.cardBackgroundLight }}
                >
                  <div className="relative bg-gray-100 aspect-square flex items-center justify-center">
                    <img 
                      src={mockup.image} 
                      alt={mockup.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#999;font-size:14px;text-align:center;padding:20px;">Upload mockup image here</div>';
                      }}
                    />
                  </div>
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">{mockup.title}</div>
                <div className="text-sm font-medium text-gray-700">{mockup.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* DOWNLOADS */}
        <section id="downloads" className="mb-20">
          <div 
            className="text-xs font-medium tracking-wider mb-8"
            style={{ color: primaryColor }}
          >
            07. BRAND ASSETS & DOWNLOADS
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {brandData.downloads.map((item, i) => (
              <button
                key={i}
                onClick={() => handleDownload(item.file, item.name)}
                className="text-white rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:opacity-90 animate-fade-in cursor-pointer"
                style={{ 
                  backgroundColor: brandData.design.cardBackgroundDark,
                  animationDelay: `${i * 100}ms` 
                }}
              >
                <Download className="mb-4" size={32} style={{ color: primaryColor }} />
                <div className="font-bold mb-2">{item.name}</div>
                <div className="text-xs text-gray-400">{item.size}</div>
              </button>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-xs text-gray-400 pt-16 border-t border-gray-200">
          <p className="mb-2">
            © 2025 {brandData.identity.designer.toUpperCase()}. ALL RIGHTS RESERVED. POWERED EXCLUSIVELY FOR {brandData.identity.client.toUpperCase()}.
          </p>
          <p>INTERNATIONAL.</p>
        </footer>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        /* Print styles for PDF - preserve colors and layout */
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          body, html {
            background-color: #F8FAFC !important;
            margin: 0;
            padding: 0;
          }
          
          header {
            display: none !important;
          }
          
          section {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          
          .animate-fade-in, .animate-fade-in-delay, .animate-fade-in-delay-2, .animate-float {
            animation: none !important;
            opacity: 1 !important;
          }
          
          button, .logo-component {
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
}
