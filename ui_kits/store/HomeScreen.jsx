// Screens — Home, PLP, PDP, Account
const fmt = (n) => n.toFixed(2).replace('.', ',') + ' €';

// Helper for responsive grids
const getResponsiveGrid = (width) => {
  if (width <= 480) return { cols: 1, gap: 8, sectionPad: 12, heading: 22 };
  if (width <= 768) return { cols: 2, gap: 12, sectionPad: 16, heading: 28 };
  if (width <= 1024) return { cols: 3, gap: 14, sectionPad: 24, heading: 32 };
  return { cols: 4, gap: 16, sectionPad: 32, heading: 38 };
};

// ----- HOME -----
const HomeScreen = ({ products, onOpenProduct, onAdd, onNav }) => {
  const width = useResponsive();
  const responsive = getResponsiveGrid(width);
  const featured = products.slice(0, 4);
  const drops    = products.filter(p => p.tag === 'NEW' || p.tag === 'LIMITED').slice(0, 3);
  
  return (
    <main>
      <Hero onShop={() => onNav('plp')}/>
      {/* Categories */}
      <section style={{ maxWidth: '100%', margin: '0 auto', padding: `${responsive.sectionPad}px` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: responsive.sectionPad, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <Eyebrow>Catégories</Eyebrow>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: responsive.heading, fontWeight: 600, margin: '8px 0 0', letterSpacing: '-0.02em' }}>Trouve ton équipement.</h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(responsive.cols, 2)}, 1fr)`, gap: responsive.gap }}>
          {[
            { id: 'controllers', name: 'Manettes', shape: 'controller', tone: 'dark' },
            { id: 'headsets', name: 'Casques', shape: 'headset', tone: 'light' },
            { id: 'wheels', name: 'Volants', shape: 'wheel', tone: 'dark' },
            { id: 'merch', name: 'Merch', shape: 'hoodie', tone: 'dark' },
          ].map(c => <CategoryTile key={c.id} {...c} onClick={() => onNav('plp')}/>)}
        </div>
      </section>

      {/* Featured drops */}
      <section style={{ maxWidth: '100%', margin: '0 auto', padding: `${responsive.sectionPad}px` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: responsive.sectionPad, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <Eyebrow style={{ display:'inline-flex', alignItems:'center', gap: 8 }}><span style={{ width: 6, height: 6, background: '#C6FF3D', borderRadius: '50%', boxShadow: '0 0 6px #C6FF3D' }}/>Drops cette semaine</Eyebrow>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: responsive.heading, fontWeight: 600, margin: '8px 0 0', letterSpacing: '-0.02em' }}>Nouveaux produits.</h2>
          </div>
          {width > 480 && <a onClick={() => onNav('plp')} style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: '#2A2D34', cursor: 'pointer', borderBottom: '1.5px solid #2A2D34', paddingBottom: 2 }}>Tout voir →</a>}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(responsive.cols, 2)}, 1fr)`, gap: responsive.gap }}>
          {featured.map(p => <ProductCard key={p.id} product={p} onOpen={onOpenProduct} onAdd={onAdd}/>)}
        </div>
      </section>

      {/* Limited edition spotlight */}
      <section style={{ background: '#0E1014', color: '#F5F5F2', margin: `${responsive.sectionPad}px 0 0`, padding: `${responsive.sectionPad}px` }}>
        <div style={{ maxWidth: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: width <= 768 ? '1fr' : '1fr 1fr', gap: responsive.gap * 4, alignItems: 'center' }}>
          <div style={{ aspectRatio: '1.2 / 1', position: 'relative' }}>
            <ProductShape shape="bottle" tone="dark"/>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Eyebrow style={{ color: '#C6FF3D' }}>Édition limitée · 500 ex.</Eyebrow>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: width <= 480 ? 28 : width <= 768 ? 40 : 56, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>Gourde Tossavi —<br/>Squad Edition.</h2>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: width <= 480 ? 14 : 17, color: '#9CA0AB', lineHeight: 1.55, margin: 0, maxWidth: 460 }}>Inox double paroi, 750 ml, isotherme 12h. Logo gravé au laser. Numérotée à la main.</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 8, alignItems: 'center', flexWrap: 'wrap' }}>
              <Price value={24.90} size="xl" dark/>
              <Button variant="volt" size="lg" onClick={() => onAdd && onAdd(products.find(p => p.id === 'gourde-tossavi'))}>Ajouter au panier</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Best sellers */}
      <section style={{ maxWidth: '100%', margin: '0 auto', padding: `${responsive.sectionPad * 4}px ${responsive.sectionPad}px 0` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: responsive.sectionPad, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <Eyebrow>Best-sellers</Eyebrow>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: responsive.heading, fontWeight: 600, margin: '8px 0 0', letterSpacing: '-0.02em' }}>Ce que la squad achète.</h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${responsive.cols}, 1fr)`, gap: responsive.gap }}>
          {products.slice(2, 6).map(p => <ProductCard key={p.id} product={p} onOpen={onOpenProduct} onAdd={onAdd}/>)}
        </div>
      </section>

      {/* Trust */}
      <section style={{ maxWidth: '100%', margin: `${responsive.sectionPad * 4}px auto ${responsive.sectionPad * 2}px`, padding: `${responsive.sectionPad}px`, borderTop: '1px solid #D9D8D2', borderBottom: '1px solid #D9D8D2' }}>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.max(Math.min(responsive.cols, 2), 1)}, 1fr)`, gap: width <= 480 ? responsive.gap : 32 }}>
          {[
            ['truck', 'Livraison 48h', 'Offerte dès 50 €'],
            ['shield-check', 'Garantie 2 ans', 'Constructeur officielle'],
            ['rotate-ccw', 'Retours 30 jours', 'Sans frais, sans question'],
            ['headphones', 'Service FR/EN', 'Lun–Sam · 9h–19h'],
          ].map(([icon, h, p], i) => (
            <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <i data-lucide={icon} style={{ width: 24, height: 24, color: '#0070D1', strokeWidth: 1.75, flexShrink: 0, marginTop: 2 }}/>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15 }}>{h}</div>
                <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, color: '#5A5E68', marginTop: 2 }}>{p}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

const CategoryTile = ({ name, shape, tone, onClick }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      aspectRatio: '0.85', position: 'relative', overflow: 'hidden', cursor: 'pointer',
      background: tone === 'dark' ? '#0E1014' : '#ECECE7', borderRadius: 8,
      transition: 'all 280ms cubic-bezier(0.22,1,0.36,1)',
      transform: hover ? 'translateY(-4px)' : 'none',
      boxShadow: hover ? '0 24px 60px rgba(14,16,20,0.14)' : '0 1px 2px rgba(14,16,20,0.04)',
    }}>
      <div style={{ position: 'absolute', inset: '15% 15% 35%' }}>
        <ProductShape shape={shape} tone={tone}/>
      </div>
      <div style={{ position: 'absolute', left: 20, right: 20, bottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: tone === 'dark' ? '#F5F5F2' : '#2A2D34' }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, letterSpacing: '-0.01em' }}>{name}</span>
        <i data-lucide="arrow-right" style={{ width: 22, height: 22, transform: hover ? 'translateX(4px)' : 'none', transition: 'transform 280ms' }}/>
      </div>
    </div>
  );
};

window.HomeScreen = HomeScreen;
