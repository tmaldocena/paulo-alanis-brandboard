# React + Vite
# 🎨 Brandboard Template

A professional, interactive single-page brandboard template for presenting brand identities to clients. Built with React + Vite for optimal performance and easy customization.

## ✨ Features

- 🎯 **JSON-based configuration** - Edit one object to customize everything
- 🎨 **Custom fonts & colors** - Supports Google Fonts and local fonts
- 📄 **PDF Export** - Download the entire brandboard as a high-quality PDF
- 🌗 **Adaptive design** - Automatically uses brand colors throughout
- ⚡ **Smooth animations** - Subtle, premium micro-interactions
- 📱 **Fully responsive** - Works perfectly on all devices
- 💾 **Copy color codes** - One-click HEX code copying

## 🚀 Quick Start

### Installation

```bash
# Clone or download this template
npm install

# Install required dependencies
npm install html2canvas jspdf lucide-react

# Start development server
npm run dev
```

### Customization

All brand data is configured in a single JSON object at the top of `App.jsx` (lines 7-110).

#### 1. Basic Brand Information

```javascript
identity: {
  brandName: "BOLD",
  brandNameSecondary: "CREATIVE",
  tagline: "Your brand's inspiring tagline here",
  logoText: "BC",
  designer: "Studio Nexus",
  client: "Bold Group Inc."
}
```

#### 2. Design System

```javascript
design: {
  primaryFont: {
    name: "Inter",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
  },
  backgroundColor: "#F8FAFC",
  cardBackgroundLight: "#FFFFFF",
  cardBackgroundDark: "#0A0E1A",
}
```

**Using custom fonts:**
- **Google Fonts**: Just change the `googleFontsUrl`
- **Local fonts**: Set `googleFontsUrl: null` and add font files to `/public/fonts/`

#### 3. Color Palette

```javascript
colors: [
  {
    name: "ELECTRIC BLUE",
    hex: "#0D7AFF",
    rgb: "13, 122, 255",
    usage: "Primary brand color",
    isPrimary: true // This color will be used as accent throughout
  },
  // Add more colors...
]
```

#### 4. Typography & Content

Edit the `foundations`, `typography`, `logo`, and `downloads` sections to match your brand.

## 📦 Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

The build will be in the `dist` folder, ready to deploy.

## 🌐 Deployment

Deploy to any static hosting service:

**Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
# Drag & drop the 'dist' folder to netlify.com
```

**Other options**: GitHub Pages, Cloudflare Pages, AWS S3

## 📂 Project Structure

```
brandboard-template/
├── src/
│   ├── App.jsx          # Main component with brandData
│   └── main.jsx         # Entry point
├── public/
│   └── fonts/           # (Optional) Custom font files
├── package.json
└── README.md
```

## 🎯 Use Cases

- **Client deliverables** - Professional brand presentation
- **Design handoffs** - Quick reference for developers
- **Brand guidelines** - Lightweight alternative to lengthy PDFs
- **Portfolio pieces** - Showcase your branding work
- **Internal reference** - Team access to brand assets

## 🛠️ Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling (via inline styles)
- **html2canvas** - PDF screenshot generation
- **jsPDF** - PDF creation
- **Lucide React** - Icons

## 📝 Tips for Multiple Clients

1. **Duplicate the project folder** for each client
2. **Edit only the `brandData` object** (lines 7-110)
3. **Replace placeholder logos** with real brand assets
4. **Deploy each to a unique URL** (e.g., `client-name.vercel.app`)

## 🐛 Troubleshooting

**PDF generation fails:**
- Make sure `html2canvas` and `jspdf` are installed
- Check browser console for errors
- Try refreshing the page

**Fonts not loading:**
- Verify Google Fonts URL is correct
- Check browser network tab for 404 errors
- Ensure local font files are in `/public/fonts/`

**Colors not applying:**
- Make sure one color has `isPrimary: true`
- Check HEX codes are valid (include #)
- Clear browser cache and refresh

## 📄 License

MIT License - Free to use for commercial and personal projects.

## 🙏 Credits

Created with ❤️ by **[Maguito Studio](https://maguitostudio.vercel.app)**

---

**Need help customizing this template?** Feel free to reach out or submit an issue on GitHub.

**Want to see it in action?** Check out the live demo at your deployed URL.