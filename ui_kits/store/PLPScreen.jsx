// PLP — product listing page
const PLPScreen = ({ products, onOpenProduct, onAdd }) => {
  const [filters, setFilters] = React.useState({ cat: [], platform: [], brand: [] });
  const [sort, setSort] = React.useState('featured');
  const filtered = products.filter(p => {
    if (filters.cat?.length && !filters.cat.includes(p.category)) return false;
    if (filters.platform?.length && !filters.platform.includes(p.platform)) return false;
    if (filters.brand?.length && !filters.brand.includes(p.brand)) return false;
    return true;
  });
  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'price-asc') return a.price - b.price;
    if (sort === 'price-desc') return b.price - a.price;
    return 0;
  });
  return (
    <main style={{ maxWidth: 1280, margin: '0 auto', padding: '32px 32px 80px' }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 24, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8B8F99' }}>
        <span style={{ cursor: 'pointer' }}>Accueil</span><span>/</span><span style={{ color: '#2A2D34' }}>Catalogue</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, gap: 32, flexWrap: 'wrap' }}>
        <div>
          <Eyebrow>Catalogue · {sorted.length} produits</Eyebrow>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 56, fontWeight: 700, margin: '8px 0 0', letterSpacing: '-0.02em', lineHeight: 1 }}>Tout le gaming.</h1>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Eyebrow>Trier par</Eyebrow>
          <select value={sort} onChange={(e) => setSort(e.target.value)} style={{ height: 40, padding: '0 12px', border: '1px solid #D9D8D2', background: 'white', fontFamily: "'Manrope', sans-serif", fontSize: 13, borderRadius: 2 }}>
            <option value="featured">Recommandés</option>
            <option value="price-asc">Prix ↑</option>
            <option value="price-desc">Prix ↓</option>
          </select>
        </div>
      </div>
      {/* Active chips */}
      {(filters.cat?.length || filters.platform?.length || filters.brand?.length) > 0 && (
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {[...(filters.cat||[]), ...(filters.platform||[]), ...(filters.brand||[])].map(v => (
            <span key={v} style={{ padding: '7px 13px', background: '#2A2D34', color: '#F5F5F2', borderRadius: 999, fontFamily: "'Manrope', sans-serif", fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              {v} <span style={{ opacity: 0.7, cursor: 'pointer' }}>×</span>
            </span>
          ))}
          <a onClick={() => setFilters({})} style={{ padding: '7px 13px', fontFamily: "'Manrope', sans-serif", fontSize: 13, cursor: 'pointer', borderBottom: '1.5px solid #2A2D34' }}>Tout effacer</a>
        </div>
      )}
      <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
        <FilterRail filters={filters} onChange={setFilters}/>
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {sorted.map(p => <ProductCard key={p.id} product={p} onOpen={onOpenProduct} onAdd={onAdd}/>)}
          {sorted.length === 0 && (
            <div style={{ gridColumn: '1 / -1', padding: 80, textAlign: 'center', border: '1px dashed #D9D8D2' }}>
              <PSSymbol kind="square" size={40}/>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 600, marginTop: 16 }}>Aucun produit ne correspond.</div>
              <Button variant="outline" size="md" onClick={() => setFilters({})} style={{ marginTop: 16 }}>Effacer les filtres</Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

window.PLPScreen = PLPScreen;
