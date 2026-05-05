// ProductCard — grid card with hover reveal of CTA
const ProductCard = ({ product, onOpen, onAdd }) => {
  const [hover, setHover] = React.useState(false);
  const sale = !!product.original;
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onOpen && onOpen(product)}
      style={{
        background: 'white', borderRadius: 8, overflow: 'hidden',
        border: '1px solid #E2E1DB',
        display: 'flex', flexDirection: 'column',
        cursor: 'pointer',
        boxShadow: hover ? '0 12px 32px rgba(14,16,20,0.10), 0 4px 8px rgba(14,16,20,0.04)' : '0 1px 2px rgba(14,16,20,0.04)',
        transform: hover ? 'translateY(-2px)' : 'none',
        transition: 'all 280ms cubic-bezier(0.22,1,0.36,1)',
      }}>
      <div style={{ aspectRatio: '1.05 / 1', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          transform: hover ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 480ms cubic-bezier(0.22,1,0.36,1)',
        }}>
          <ProductShape shape={product.shape} tone={product.tone}/>
        </div>
        {/* Top-left badge */}
        {product.badge && (
          <div style={{ position: 'absolute', top: 12, left: 12 }}>
            <Badge variant={product.tag === 'SALE' ? 'sale' : product.tag === 'NEW' ? 'new' : product.tag === 'LIMITED' ? 'limited' : 'default'}>{product.badge}</Badge>
          </div>
        )}
        {/* Heart */}
        <button onClick={(e) => { e.stopPropagation(); }} style={{
          position: 'absolute', top: 12, right: 12,
          width: 34, height: 34, borderRadius: '50%',
          background: 'white', border: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)', cursor: 'pointer',
        }}>
          <i data-lucide="heart" style={{ width: 14, height: 14, color: '#2A2D34' }}/>
        </button>
        {/* Hover CTA */}
        <div style={{
          position: 'absolute', left: 12, right: 12, bottom: 12,
          transform: hover ? 'translateY(0)' : 'translateY(120%)',
          opacity: hover ? 1 : 0,
          transition: 'all 280ms cubic-bezier(0.22,1,0.36,1)',
        }}>
          <Button variant="ghost" size="sm" style={{ width: '100%' }} onClick={(e) => { e.stopPropagation(); onAdd && onAdd(product); }}>
            <i data-lucide="plus" style={{ width: 14, height: 14 }}/> Ajouter au panier
          </Button>
        </div>
      </div>
      <div style={{ padding: '14px 16px 16px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Eyebrow>{product.brand} · {product.platform}</Eyebrow>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 600, color: '#2A2D34', lineHeight: 1.3 }}>{product.name}</div>
        <div style={{ marginTop: 6 }}>
          <Price value={product.price} original={product.original} size="md"/>
        </div>
      </div>
    </div>
  );
};

window.ProductCard = ProductCard;
