// Header — sticky top nav with logo, primary nav, search, account, cart
const Header = ({ cartCount = 0, onCart, onNav, active = 'home' }) => {
  const [hover, setHover] = React.useState(null);
  const navItems = [
    { id: 'controllers', label: 'Manettes' },
    { id: 'headsets', label: 'Casques' },
    { id: 'stands', label: 'Stands' },
    { id: 'merch', label: 'Merch' },
    { id: 'drops', label: 'Drops', special: true },
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(245,245,242,0.85)', backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid #D9D8D2',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', height: 72, padding: '0 32px',
        display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: 40,
      }}>
        <a onClick={() => onNav && onNav('home')} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', textDecoration: 'none' }}>
          <LogoMark size={28}/>
          <span style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', color: '#2A2D34' }}>TOSSAVI</span>
        </a>
        <nav style={{ display: 'flex', gap: 28, justifyContent: 'center' }}>
          {navItems.map(it => (
            <a key={it.id}
              onClick={() => onNav && onNav(it.id)}
              onMouseEnter={() => setHover(it.id)}
              onMouseLeave={() => setHover(null)}
              style={{
                fontFamily: "'Manrope', system-ui, sans-serif", fontSize: 14, fontWeight: 500,
                color: active === it.id ? '#0070D1' : '#2A2D34',
                cursor: 'pointer', textDecoration: 'none', position: 'relative',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}>
              {it.special && <span style={{ width: 6, height: 6, background: '#C6FF3D', borderRadius: '50%', boxShadow: '0 0 6px #C6FF3D' }}/>}
              {it.label}
              <span style={{
                position: 'absolute', left: 0, right: 0, bottom: -6, height: 2,
                background: '#2A2D34',
                transform: hover === it.id ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left', transition: 'transform 240ms cubic-bezier(0.22,1,0.36,1)',
              }}/>
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 10px 0 14px', height: 38, border: '1px solid #D9D8D2', background: 'white', borderRadius: 2, marginRight: 6, width: 220 }}>
            <i data-lucide="search" style={{ width: 16, height: 16, color: '#5A5E68' }}/>
            <input placeholder="Manette, casque…" style={{ border: 0, outline: 0, flex: 1, fontFamily: "'Manrope', sans-serif", fontSize: 13, background: 'transparent' }}/>
          </div>
          <IconBtn label="Account"><i data-lucide="user" style={{ width: 18, height: 18 }}/></IconBtn>
          <IconBtn label="Wishlist"><i data-lucide="heart" style={{ width: 18, height: 18 }}/></IconBtn>
          <IconBtn label="Cart" onClick={onCart} badge={cartCount}><i data-lucide="shopping-bag" style={{ width: 18, height: 18 }}/></IconBtn>
        </div>
      </div>
      {/* Marquee announcement bar */}
      <div style={{ background: '#0E1014', color: '#F5F5F2', height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        <span style={{ display:'inline-flex', alignItems:'center', gap: 8 }}><PSSymbol kind="cross" size={12}/> Livraison gratuite dès 50 €</span>
        <span style={{ opacity: 0.4 }}>·</span>
        <span style={{ display:'inline-flex', alignItems:'center', gap: 8 }}><PSSymbol kind="triangle" size={12}/> Drop édition limitée · 04/26</span>
        <span style={{ opacity: 0.4 }}>·</span>
        <span style={{ display:'inline-flex', alignItems:'center', gap: 8 }}><PSSymbol kind="circle" size={12}/> FR/EN</span>
      </div>
    </header>
  );
};

window.Header = Header;
