import React from 'react';

/**
 * LogoComponent - Renders SVG logos with consistent styling
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Logo variant: 'primary', 'dark', 'light', 'accent' (default: 'primary')
 * @param {number} props.size - Size in pixels (default: 24)
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Inline styles
 * @returns {JSX.Element}
 */
export default function LogoComponent({ 
  variant = 'primary', 
  size = 24, 
  className = '', 
  style = {} 
}) {
  
  const logoMap = {
    primary: '/assets/logos/primary/logo-primary.svg',
    dark: '/assets/logos/variations/logo-dark.svg',
    light: '/assets/logos/variations/logo-light.svg',
    accent: '/assets/logos/variations/logo-accent.svg',
    social: '/assets/logos/social/logo-social-square.svg',
    favicon: '/assets/logos/icon/favicon.svg',
    construction: '/assets/logos/construction/logo-construction.svg',
    pattern: '/assets/logos/pattern/pattern.svg'
  };

  const logoPath = logoMap[variant] || logoMap.primary;

  return (
    <img
      src={logoPath}
      alt="PA Logo"
      className={`logo-component ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        objectFit: 'contain',
        ...style
      }}
    />
  );
}
