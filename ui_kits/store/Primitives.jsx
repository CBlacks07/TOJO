// Reusable shared UI primitives for the Tossavi store kit.
// Exposes Button, Badge, IconBtn, Eyebrow, Price, PSSymbol on window.

const Button = ({ variant = 'primary', size = 'md', children, onClick, icon, disabled, style = {} }) => {
  const base = {
    fontFamily: "'Space Grotesk', system-ui, sans-serif",
    fontWeight: 600,
    letterSpacing: '0.02em',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    transition: 'all 140ms cubic-bezier(0.4,0,0.1,1)',
    opacity: disabled ? 0.4 : 1,
    borderRadius: 2,
    whiteSpace: 'nowrap',
  };
  const sizes = {
    sm: { height: 34, padding: '0 14px', fontSize: 12 },
    md: { height: 44, padding: '0 22px', fontSize: 14 },
    lg: { height: 52, padding: '0 28px', fontSize: 15 },
  };
  const variants = {
    primary: { background: '#0070D1', color: 'white' },
    ghost: { background: '#2A2D34', color: '#F5F5F2' },
    outline: { background: 'transparent', color: '#2A2D34', borderColor: '#2A2D34' },
    volt: { background: '#C6FF3D', color: '#0E1014', borderColor: '#0E1014', boxShadow: '0 0 24px rgba(198,255,61,0.5)' },
    light: { background: '#F5F5F2', color: '#0E1014', borderColor: '#F5F5F2' },
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyles = {
    primary: { background: '#0058A6' },
    ghost: { background: '#0E1014' },
    outline: { background: '#2A2D34', color: '#F5F5F2' },
    volt: { boxShadow: '0 0 32px rgba(198,255,61,0.7)' },
    light: { background: '#ECECE7' },
  };
  return (
    <button
      onClick={disabled ? undefined : onClick}
      style={{ ...base, ...sizes[size], ...variants[variant], ...(hover && !disabled ? hoverStyles[variant] : {}), transform: hover && !disabled ? 'translateY(-1px)' : 'none', ...style }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      disabled={disabled}
    >
      {icon}{children}
    </button>
  );
};

const IconBtn = ({ children, onClick, badge, label, style = {} }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        width: 40, height: 40, border: 0, background: hover ? '#ECECE7' : 'transparent',
        color: '#2A2D34', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', borderRadius: 2, transition: 'background 140ms', ...style,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      {badge != null && badge > 0 && (
        <span style={{
          position: 'absolute', top: 4, right: 4, background: '#0070D1', color: 'white',
          fontFamily: "'JetBrains Mono', monospace", fontSize: 9, fontWeight: 600,
          minWidth: 16, height: 16, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '0 4px',
        }}>{badge}</span>
      )}
    </button>
  );
};

const Badge = ({ variant = 'default', children }) => {
  const styles = {
    default: { background: '#2A2D34', color: '#F5F5F2' },
    sale:    { background: '#E14B4B', color: 'white' },
    new:     { background: '#C6FF3D', color: '#0E1014' },
    live:    { background: '#0E1014', color: '#C6FF3D' },
    soft:    { background: '#E6F1FB', color: '#0058A6' },
    limited: { background: '#0E1014', color: '#F5F5F2' },
  };
  return (
    <span style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10, fontWeight: 600, letterSpacing: '0.12em',
      textTransform: 'uppercase',
      padding: '5px 9px',
      display: 'inline-flex', alignItems: 'center', gap: 6,
      ...styles[variant],
    }}>
      {variant === 'live' && <span style={{ width:6, height:6, background: '#C6FF3D', borderRadius: '50%', boxShadow: '0 0 6px #C6FF3D' }}/>}
      {children}
    </span>
  );
};

const Eyebrow = ({ children, style }) => (
  <span style={{
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 11, fontWeight: 500, letterSpacing: '0.18em',
    textTransform: 'uppercase', color: '#5A5E68',
    ...style,
  }}>{children}</span>
);

const Price = ({ value, original, currency = '€', size = 'md', dark = false }) => {
  const sizes = { sm: 14, md: 18, lg: 24, xl: 38 };
  const fmt = (n) => n.toFixed(2).replace('.', ',') + ' ' + currency;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 8 }}>
      <span style={{
        fontFamily: "'Space Grotesk', system-ui, sans-serif",
        fontWeight: 700, fontSize: sizes[size], letterSpacing: '-0.01em',
        fontVariantNumeric: 'tabular-nums', color: dark ? '#F5F5F2' : '#2A2D34',
      }}>{fmt(value)}</span>
      {original && (
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: sizes[size] * 0.7, color: '#8B8F99', textDecoration: 'line-through',
          fontVariantNumeric: 'tabular-nums',
        }}>{fmt(original)}</span>
      )}
    </span>
  );
};

const PSSymbol = ({ kind, size = 16, color }) => {
  const colors = { cross:'#1D6FE0', circle:'#E14B4B', square:'#E64FAE', triangle:'#2BB573' };
  const c = color || colors[kind];
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <circle cx="30" cy="30" r="26" stroke={c} strokeWidth="3"/>
      {kind === 'cross' && <path d="M19 19 L41 41 M41 19 L19 41" stroke={c} strokeWidth="3.5" strokeLinecap="round"/>}
      {kind === 'circle' && <circle cx="30" cy="30" r="13" fill="none" stroke={c} strokeWidth="3.5"/>}
      {kind === 'square' && <rect x="18" y="18" width="24" height="24" fill="none" stroke={c} strokeWidth="3.5"/>}
      {kind === 'triangle' && <path d="M30 16 L43 41 L17 41 Z" fill="none" stroke={c} strokeWidth="3.5" strokeLinejoin="round"/>}
    </svg>
  );
};

const LogoMark = ({ size = 28, color = '#2A2D34' }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <circle cx="60" cy="60" r="52" stroke={color} strokeWidth="3.5"/>
    <path d="M44 32 L44 92" stroke={color} strokeWidth="3.5" strokeLinecap="square"/>
    <path d="M44 32 L66 32 Q82 32 82 48 Q82 64 66 64 L44 64" stroke={color} strokeWidth="3.5" strokeLinecap="square"/>
    <path d="M58 40 L78 40" stroke={color} strokeWidth="3.5" strokeLinecap="square"/>
    <path d="M68 40 L68 88" stroke={color} strokeWidth="3.5" strokeLinecap="square"/>
  </svg>
);

Object.assign(window, { Button, IconBtn, Badge, Eyebrow, Price, PSSymbol, LogoMark });
