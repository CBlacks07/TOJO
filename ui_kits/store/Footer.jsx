// Footer — bilingual, with newsletter and payment marks
const Footer = () => {
  const width = useResponsive();
  const cols = [
    { h: 'Boutique', items: ['Manettes', 'Casques', 'Stands', 'Volants', 'Merch', 'Cartes PSN'] },
    { h: 'Aide', items: ['Livraison', 'Retours', 'Garantie', 'Contact', 'FAQ'] },
    { h: 'Tossavi', items: ['À propos', 'Drops', 'Programme fidélité', 'Affiliation', 'Carrières'] },
  ];
  return (
    <footer style={{ background: '#0E1014', color: '#F5F5F2', padding: width <= 480 ? '40px 12px 24px' : width <= 768 ? '60px 24px 30px' : '80px 32px 40px', overflow: 'hidden' }}>
      <div style={{ maxWidth: '100%', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: width <= 768 ? '1fr' : '1.5fr 1fr 1fr 1fr 1.4fr', gap: width <= 480 ? 24 : width <= 768 ? 32 : 40, paddingBottom: width <= 480 ? 32 : 56, borderBottom: '1px solid #242832' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <LogoMark size={width <= 480 ? 24 : 32} color="#F5F5F2"/>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: width <= 480 ? 12 : 14, letterSpacing: '0.18em' }}>TOSSAVI</span>
            </div>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: width <= 480 ? 12 : 14, color: '#9CA0AB', lineHeight: 1.6, margin: 0 }}>
              Patrice Tossavi et Associés.<br/>Tout pour le gaming PlayStation. Livraison rapide, garantie constructeur.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              <PSSymbol kind="cross" size={width <= 480 ? 16 : 20}/><PSSymbol kind="circle" size={width <= 480 ? 16 : 20}/><PSSymbol kind="square" size={width <= 480 ? 16 : 20}/><PSSymbol kind="triangle" size={width <= 480 ? 16 : 20}/>
            </div>
          </div>
          {cols.map(c => (
            <div key={c.h}>
              <Eyebrow style={{ color: '#F5F5F2' }}>{c.h}</Eyebrow>
              <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {c.items.map(i => (
                  <li key={i}><a style={{ fontFamily: "'Manrope', sans-serif", fontSize: width <= 480 ? 12 : 14, color: '#9CA0AB', textDecoration: 'none', cursor: 'pointer' }}>{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <Eyebrow style={{ color: '#F5F5F2' }}>Newsletter</Eyebrow>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: width <= 480 ? 11 : 13, color: '#9CA0AB', margin: '12px 0 16px', lineHeight: 1.5 }}>
              Drops en avant-première. Pas de spam, promis.
            </p>
            <div style={{ display: 'flex', gap: 0 }}>
              <input placeholder="ton@email.fr" style={{ flex: 1, height: 44, padding: '0 14px', background: '#181B22', border: '1px solid #242832', color: '#F5F5F2', fontFamily: "'Manrope', sans-serif", fontSize: 13, outline: 0, borderRadius: 0 }}/>
              <Button variant="volt" size="md" style={{ borderRadius: 0 }}>S'inscrire</Button>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 32, gap: width <= 480 ? 16 : 24, flexWrap: 'wrap' }}>
          <div style={{ display: width <= 480 ? 'grid' : 'flex', gridTemplateColumns: width <= 480 ? '1fr' : undefined, gap: width <= 480 ? 8 : 24, fontFamily: "'JetBrains Mono', monospace", fontSize: width <= 480 ? 10 : 11, letterSpacing: '0.06em', color: '#5A5E68' }}>
            <span style={{ gridColumn: width <= 480 ? '1 / -1' : undefined }}>© 2026 PATRICE TOSSAVI</span>
            <a style={{ color: '#5A5E68', cursor: 'pointer' }}>Mentions légales</a>
            {width > 480 && <a style={{ color: '#5A5E68', cursor: 'pointer' }}>CGV</a>}
            {width > 480 && <a style={{ color: '#5A5E68', cursor: 'pointer' }}>Cookies</a>}
          </div>
          <div style={{ display: 'flex', gap: width <= 480 ? 8 : 12, fontFamily: "'JetBrains Mono', monospace", fontSize: width <= 480 ? 9 : 10, letterSpacing: '0.1em', color: '#9CA0AB', textTransform: 'uppercase', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <span>Visa</span>
            {width > 480 && <span>Mastercard</span>}
            <span>Apple Pay</span>
            {width > 480 && <span>PayPal</span>}
            {width > 480 && <span>Klarna</span>}
          </div>
        </div>
      </div>
    </footer>
  );
};

window.Footer = Footer;
