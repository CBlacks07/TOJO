// Hero — carbon-dark hero block with parallax product silhouette
const Hero = ({ onShop }) => {
  const [parallax, setParallax] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setParallax(Math.min(y * 0.15, 40));
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <section style={{
      background: '#0E1014', color: '#F5F5F2', overflow: 'hidden', position: 'relative',
    }}>
      {/* Decorative grid lines */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.08, backgroundImage: 'linear-gradient(#F5F5F2 1px, transparent 1px), linear-gradient(90deg, #F5F5F2 1px, transparent 1px)', backgroundSize: '64px 64px' }}/>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '80px 32px 100px',
        display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 40, alignItems: 'center',
        position: 'relative',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <Eyebrow style={{ color: '#C6FF3D' }}>Drop 04/26 · Édition limitée</Eyebrow>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 88, fontWeight: 700, lineHeight: 0.95, letterSpacing: '-0.03em',
            color: '#F5F5F2', margin: 0,
          }}>
            Élève ton<br/>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 16 }}>
              setup <PSSymbol kind="triangle" size={64}/>
            </span>
          </h1>
          <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 18, lineHeight: 1.55, color: '#9CA0AB', maxWidth: 460, margin: 0 }}>
            Manettes, casques, volants, merch — tout ce qui fait ton rig PlayStation, livré sous 48h.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <Button variant="volt" size="lg" onClick={onShop}>Voir les drops →</Button>
            <Button variant="light" size="lg">Catalogue</Button>
          </div>
          {/* Mini stats */}
          <div style={{ display: 'flex', gap: 40, marginTop: 16, paddingTop: 24, borderTop: '1px solid #242832' }}>
            <div><div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: '#F5F5F2' }}>500+</div><Eyebrow style={{ color: '#9CA0AB' }}>références</Eyebrow></div>
            <div><div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: '#F5F5F2' }}>48h</div><Eyebrow style={{ color: '#9CA0AB' }}>livraison</Eyebrow></div>
            <div><div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: '#F5F5F2' }}>4,8★</div><Eyebrow style={{ color: '#9CA0AB' }}>2 412 avis</Eyebrow></div>
          </div>
        </div>
        <div style={{ position: 'relative', aspectRatio: '1', transform: `translateY(${-parallax}px)` }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(0,112,209,0.4), transparent 60%)' }}/>
          <ProductShape shape="controller" tone="dark"/>
          {/* Floating PS symbols */}
          <div style={{ position: 'absolute', top: '8%', right: '8%', animation: 'float1 5s ease-in-out infinite' }}><PSSymbol kind="cross" size={28}/></div>
          <div style={{ position: 'absolute', bottom: '12%', left: '10%', animation: 'float2 6s ease-in-out infinite' }}><PSSymbol kind="circle" size={32}/></div>
          <div style={{ position: 'absolute', top: '50%', right: '4%', animation: 'float1 7s ease-in-out infinite' }}><PSSymbol kind="square" size={24}/></div>
        </div>
      </div>
      <style>{`
        @keyframes float1 { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
        @keyframes float2 { 0%,100% { transform: translateY(0) } 50% { transform: translateY(10px) } }
      `}</style>
    </section>
  );
};

window.Hero = Hero;
