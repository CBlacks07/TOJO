// Responsive utility for mobile-friendly layouts
window.ResponsiveUtils = {
  // Get grid columns based on screen width
  getGridCols: (width) => {
    if (width <= 480) return 1;
    if (width <= 768) return 2;
    if (width <= 1024) return 3;
    return 4;
  },
  
  // Get padding based on screen width
  getPadding: (width) => {
    if (width <= 480) return 16;
    if (width <= 768) return 24;
    return 32;
  },
  
  // Get font sizes for mobile
  getHeadingSize: (level, width) => {
    const sizes = {
      h1: { desktop: 64, tablet: 48, mobile: 36 },
      h2: { desktop: 38, tablet: 32, mobile: 24 },
      h3: { desktop: 30, tablet: 24, mobile: 20 },
      h4: { desktop: 24, tablet: 20, mobile: 18 },
    };
    if (!sizes[level]) return 16;
    if (width <= 480) return sizes[level].mobile;
    if (width <= 768) return sizes[level].tablet;
    return sizes[level].desktop;
  },
  
  // Responsive section styles
  getSection: (width) => ({
    maxWidth: '100%',
    margin: '0 auto',
    padding: `${ResponsiveUtils.getPadding(width)}px`,
  }),
  
  // Responsive gap
  getGap: (width) => {
    if (width <= 480) return 8;
    if (width <= 768) return 12;
    return 16;
  },
};

// React hook for responsive width
const useResponsive = () => {
  const [width, setWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1280);
  
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return width;
};

window.useResponsive = useResponsive;
