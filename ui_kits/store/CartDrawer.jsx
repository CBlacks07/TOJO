// Cart drawer — slide-in from right
const CartDrawer = ({ open, onClose, items = [], onRemove, onQty }) => {
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const shipping = subtotal >= 50 ? 0 : 4.99;
  const total = subtotal + shipping;
  const fmt = (n) => n.toFixed(2).replace('.', ',') + ' €';
  return (
    <React.Fragment>
      {/* Scrim */}
      <div onClick={onClose} style={{
        position: 'fixed', inset: 0, background: 'rgba(14,16,20,0.4)',
        opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity 240ms', zIndex: 90,
      }}/>
      {/* Drawer */}
      <aside style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: 440, maxWidth: '100vw',
        background: '#F5F5F2', zIndex: 100,
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 360ms cubic-bezier(0.22,1,0.36,1)',
        display: 'flex', flexDirection: 'column',
        boxShadow: '-12px 0 60px rgba(14,16,20,0.2)',
      }}>
        <div style={{ padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #D9D8D2' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <h3 style={{ margin: 0, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 22, color: '#2A2D34' }}>Panier</h3>
            <Eyebrow>{items.length} article{items.length > 1 ? 's' : ''}</Eyebrow>
          </div>
          <IconBtn onClick={onClose} label="Close"><i data-lucide="x" style={{ width: 18, height: 18 }}/></IconBtn>
        </div>
        {items.length === 0 ? (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, padding: 32, textAlign: 'center' }}>
            <PSSymbol kind="square" size={56}/>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 600 }}>Rien dans le panier.</div>
            <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, color: '#5A5E68' }}>Va chercher du loot.</div>
            <Button variant="ghost" onClick={onClose} style={{ marginTop: 8 }}>Continuer le shopping</Button>
          </div>
        ) : (
          <React.Fragment>
            <div style={{ flex: 1, overflowY: 'auto', padding: '8px 28px' }}>
              {items.map((it, i) => (
                <div key={i} style={{ padding: '20px 0', borderBottom: '1px solid #ECECE7', display: 'grid', gridTemplateColumns: '72px 1fr auto', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 72, height: 72, background: '#ECECE7', borderRadius: 4, overflow: 'hidden' }}>
                    <ProductShape shape={it.shape} tone={it.tone}/>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <Eyebrow>{it.brand} · {it.platform}</Eyebrow>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600 }}>{it.name}</div>
                    {/* qty stepper */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', height: 30, border: '1px solid #2A2D34', width: 'fit-content', marginTop: 6 }}>
                      <button onClick={() => onQty && onQty(i, it.qty - 1)} style={{ width: 30, height: 30, border: 0, background: 'transparent', fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>−</button>
                      <span style={{ width: 28, textAlign: 'center', fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{it.qty}</span>
                      <button onClick={() => onQty && onQty(i, it.qty + 1)} style={{ width: 30, height: 30, border: 0, background: 'transparent', fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>+</button>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                    <Price value={it.price * it.qty} size="sm"/>
                    <button onClick={() => onRemove && onRemove(i)} style={{ border: 0, background: 'transparent', cursor: 'pointer', color: '#8B8F99' }}>
                      <i data-lucide="trash-2" style={{ width: 14, height: 14 }}/>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: '20px 28px 28px', borderTop: '1px solid #D9D8D2', background: 'white' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontFamily: "'Manrope', sans-serif", fontSize: 14, color: '#5A5E68' }}>
                <span>Sous-total</span><span style={{ fontVariantNumeric: 'tabular-nums', color: '#2A2D34' }}>{fmt(subtotal)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontFamily: "'Manrope', sans-serif", fontSize: 14, color: '#5A5E68' }}>
                <span>Livraison {subtotal >= 50 && <span style={{ color: '#1F9D55', fontWeight: 600 }}>(offerte)</span>}</span>
                <span style={{ fontVariantNumeric: 'tabular-nums', color: '#2A2D34' }}>{shipping === 0 ? '—' : fmt(shipping)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '12px 0 16px', borderTop: '1px solid #ECECE7', marginTop: 8 }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16 }}>Total</span>
                <Price value={total} size="lg"/>
              </div>
              <Button variant="primary" size="lg" style={{ width: '100%' }}>
                Passer au paiement <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}/>
              </Button>
              <div style={{ marginTop: 12, display: 'flex', justifyContent: 'center', gap: 14, color: '#8B8F99' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Visa</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Mastercard</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Apple Pay</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' }}>PayPal</span>
              </div>
            </div>
          </React.Fragment>
        )}
      </aside>
    </React.Fragment>
  );
};

window.CartDrawer = CartDrawer;
