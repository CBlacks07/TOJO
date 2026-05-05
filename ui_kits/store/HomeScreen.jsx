// Screens — Home, PLP, PDP, Account
const fmt = (n) => n.toFixed(2).replace('.', ',') + ' €';

// ----- HOME -----
const HomeScreen = ({ products, onOpenProduct, onAdd, onNav }) => {
  const featured = products.slice(0, 4);
  const drops    = products.filter(p => p.tag === 'NEW' || p.tag === 'LIMITED').slice(0, 3);
  return (
    <main>
      <Hero onShop={() => onNav('plp')}/>
      {/* Categories */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 32px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
          <div>
            <Eyebrow>Catégories</Eyebrow>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 38, fontWeight: 600, margin: '8px 0 0', letterSpacing: '-0.02em' }}>Trouve ton équipement.</h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { id: 'controllers', name: 'Manettes', shape: 'controller', tone: 'dark' },
            { id: 'headsets', name: 'Casques', shape: 'headset', tone: 'light' },
            { id: 'wheels', name: 'Volants', shape: 'wheel', tone: 'dark' },
            { id: 'merch', name: 'Merch', shape: 'hoodie', tone: 'dark' },
          ].map(c => <CategoryTile key={c.id} {...c} onClick={() => onNav('plp')}/>)}
        </div>
      </section>

      {/* Featured drops */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 32px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
          <div>
            <Eyebrow style={{ display:'inline-flex', alignItems:'center', gap: 8 }}><span style={{ width: 6, height: 6, background: '#C6FF3D', borderRadius: '50%', boxShadow: '0 0 6px #C6FF3D' }}/>Drops cette semaine</Eyebrow>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 38, fontWeight: 600, margin: '8px 0 0', letterSpacing: '-0.02em' }}>Nouveaux produits.</h2>
          </div>
          <a onClick={() => onNav('plp')} style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 14, color: '#2A2D34', cursor: 'pointer', borderBottom: '1.5px solid #2A2D34', paddingBottom: 2 }}>Tout voir →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {featured.map(p => <ProductCard key={p.id} product={p} onOpen={onOpenProduct} onAdd={onAdd}/>)}
        </div>
      </section>

      {/* Limited edition spotlight */}
      <section style={{ background: '#0E1014', color: '#F5F5F2', margin: '120px 0 0', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div style={{ aspectRatio: '1.2 / 1', position: 'relative' }}>
            <ProductShape shape="bottle" tone="dark"/>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Eyebrow style={{ color: '#C6FF3D' }}>Édition limitée · 500 ex.</Eyebrow>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 56, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.02em', margin: 0 }}>Gourde Tossavi —<br/>Squad Edition.</h2>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 17, color: '#9CA0AB', lineHeight: 1.55, margin: 0, maxWidth: 460 }}>Inox double paroi, 750 ml, isotherme 12h. Logo gravé au laser. Numérotée à la main.</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 8, alignItems: 'center' }}>
              <Price value={24.90} size="xl" dark/>
              <Button variant="volt" size="lg" onClick={() => onAdd && onAdd(products.find(p => p.id === 'gourde-tossavi'))}>Ajouter au panier</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Best sellers */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '120px 32px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
          <div>
            <Eyebrow>Best-sellers</Eyebrow>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 38, fontWeight: 600, margin: '8px 0 0', letterSpacing: '-0.02em' }}>Ce que la squad achète.</h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {products.slice(2, 6).map(p => <ProductCard key={p.id} product={p} onOpen={onOpenProduct} onAdd={onAdd}/>)}
        </div>
      </section>

      {/* Trust */}
      <section style={{ maxWidth: 1280, margin: '120px auto 80px', padding: '40px 32px', borderTop: '1px solid #D9D8D2', borderBottom: '1px solid #D9D8D2' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
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
