// PDP — product detail
const PDPScreen = ({ product, products, onAdd, onOpenProduct, onNav }) => {
  const width = useResponsive();
  const [color, setColor] = React.useState(0);
  const [qty, setQty] = React.useState(1);
  const [tab, setTab] = React.useState('desc');
  const [imgIdx, setImgIdx] = React.useState(0);
  if (!product) return null;
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  return (
    <main style={{ maxWidth: '100%', margin: '0 auto', padding: width <= 480 ? '16px 12px 80px' : '24px 32px 80px' }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 24, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8B8F99' }}>
        <span style={{ cursor: 'pointer' }} onClick={() => onNav('home')}>Accueil</span><span>/</span>
        <span style={{ cursor: 'pointer' }} onClick={() => onNav('plp')}>{product.category}</span><span>/</span>
        <span style={{ color: '#2A2D34' }}>{product.name}</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: width <= 768 ? '1fr' : '1.2fr 1fr', gap: width <= 768 ? 24 : 56 }}>
        {/* Gallery */}
        <div>
          <div style={{ background: '#ECECE7', aspectRatio: '1', position: 'relative', overflow: 'hidden', borderRadius: 4 }}>
            <ProductShape shape={product.shape} tone={product.tone}/>
            {product.badge && (<div style={{ position: 'absolute', top: 20, left: 20 }}><Badge variant={product.tag === 'SALE' ? 'sale' : 'new'}>{product.badge}</Badge></div>)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: width <= 480 ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)', gap: 8, marginTop: 8 }}>
            {[0,1,2,3].map(i => (
              <div key={i} onClick={() => setImgIdx(i)} style={{
                aspectRatio: '1', background: '#ECECE7', cursor: 'pointer', overflow: 'hidden', borderRadius: 2,
                border: i === imgIdx ? '2px solid #2A2D34' : '2px solid transparent',
              }}>
                <ProductShape shape={product.shape} tone={product.tone}/>
              </div>
            ))}
          </div>
        </div>
        {/* Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, position: width <= 768 ? 'relative' : 'sticky', top: width <= 768 ? 0 : 120, alignSelf: 'flex-start' }}>
          <Eyebrow>{product.brand} · {product.platform}</Eyebrow>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: width <= 480 ? 28 : width <= 768 ? 36 : 42, fontWeight: 700, lineHeight: 1, letterSpacing: '-0.02em', margin: 0 }}>{product.name}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ display: 'inline-flex', gap: 2, color: '#0E1014' }}>
              {[1,2,3,4,5].map(i => <i key={i} data-lucide="star" style={{ width: 16, height: 16, fill: i <= 4 ? '#0E1014' : 'none' }}/>)}
            </span>
            <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 13, color: '#5A5E68' }}>4,8 · 412 avis</span>
          </div>
          <div style={{ paddingBottom: 20, borderBottom: '1px solid #ECECE7' }}>
            <Price value={product.price} original={product.original} size="xl"/>
            {product.original && <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#1F9D55', marginTop: 4, fontWeight: 600 }}>Tu économises {fmt(product.original - product.price)}</div>}
          </div>
          {/* Color */}
          <div>
            <Eyebrow>Couleur · {color === 0 ? 'Midnight Black' : 'Sterling Silver'}</Eyebrow>
            <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
              {(product.colors || ['#0E1014']).map((c, i) => (
                <div key={i} onClick={() => setColor(i)} style={{
                  width: 40, height: 40, borderRadius: '50%', background: c, cursor: 'pointer',
                  boxShadow: i === color ? '0 0 0 2px #F5F5F2, 0 0 0 4px #2A2D34' : 'inset 0 0 0 1px rgba(0,0,0,0.1)',
                }}/>
              ))}
            </div>
          </div>
          {/* Stock */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: product.stock < 5 ? '#FCF1E2' : '#E8F6EE', color: product.stock < 5 ? '#8C4A04' : '#0F6938', fontFamily: "'JetBrains Mono', monospace", fontSize: 12, width: 'fit-content' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: product.stock < 5 ? '#D97706' : '#1F9D55' }}/>
            {product.stock < 5 ? `Plus que ${product.stock} en stock` : 'En stock · livré sous 48h'}
          </div>
          {/* Qty + CTA */}
          <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', height: 52, border: '1px solid #2A2D34' }}>
              <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 44, height: 52, border: 0, background: 'transparent', fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 600, cursor: 'pointer' }}>−</button>
              <span style={{ width: 50, textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{qty}</span>
              <button onClick={() => setQty(qty + 1)} style={{ width: 44, height: 52, border: 0, background: 'transparent', fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 600, cursor: 'pointer' }}>+</button>
            </div>
            <Button variant="primary" size="lg" onClick={() => onAdd(product, qty)} style={{ flex: 1 }}>
              <i data-lucide="shopping-bag" style={{ width: 16, height: 16 }}/> Ajouter au panier · {fmt(product.price * qty)}
            </Button>
            <Button variant="outline" size="lg" style={{ width: 52, padding: 0 }}><i data-lucide="heart" style={{ width: 18, height: 18 }}/></Button>
          </div>
          {/* Trust strip */}
          <div style={{ display: 'flex', gap: 16, paddingTop: 16, marginTop: 8, borderTop: '1px solid #ECECE7', flexWrap: 'wrap' }}>
            {[['truck', 'Livraison 48h'], ['shield-check', 'Garantie 2 ans'], ['rotate-ccw', 'Retours 30j']].map(([ic, lbl]) => (
              <div key={ic} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: "'Manrope', sans-serif", fontSize: 12, color: '#5A5E68' }}>
                <i data-lucide={ic} style={{ width: 14, height: 14 }}/>{lbl}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div style={{ marginTop: 80, borderBottom: '1px solid #D9D8D2', display: 'flex', gap: 0 }}>
        {[['desc', 'Description'], ['specs', 'Caractéristiques'], ['reviews', 'Avis (412)']].map(([k, lbl]) => (
          <button key={k} onClick={() => setTab(k)} style={{
            background: 'transparent', border: 0, padding: '16px 24px',
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 600,
            color: tab === k ? '#2A2D34' : '#8B8F99',
            borderBottom: tab === k ? '2px solid #2A2D34' : '2px solid transparent',
            marginBottom: -1, cursor: 'pointer',
          }}>{lbl}</button>
        ))}
      </div>
      <div style={{ padding: '40px 0', maxWidth: 720 }}>
        {tab === 'desc' && (
          <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: 16, lineHeight: 1.65, color: '#2A2D34', margin: 0 }}>{product.desc}</p>
        )}
        {tab === 'specs' && product.specs?.length > 0 && (
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <tbody>
              {product.specs.map(([k, v]) => (
                <tr key={k} style={{ borderBottom: '1px solid #ECECE7' }}>
                  <td style={{ padding: '14px 0', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5A5E68', width: 200 }}>{k}</td>
                  <td style={{ padding: '14px 0', fontFamily: "'Manrope', sans-serif", fontSize: 14, color: '#2A2D34' }}>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {tab === 'reviews' && (
          <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, color: '#5A5E68' }}>Les avis arrivent…</div>
        )}
      </div>
      {/* Related */}
      {related.length > 0 && (
        <section style={{ marginTop: 60 }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 600, margin: '0 0 24px', letterSpacing: '-0.01em' }}>Tu aimeras aussi</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {related.map(p => <ProductCard key={p.id} product={p} onOpen={onOpenProduct} onAdd={onAdd}/>)}
          </div>
        </section>
      )}
    </main>
  );
};

window.PDPScreen = PDPScreen;
