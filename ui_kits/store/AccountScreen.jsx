// Account screen — orders, wishlist, profile
const AccountScreen = ({ products, onOpenProduct, onAdd }) => {
  const width = useResponsive();
  const [section, setSection] = React.useState('orders');
  const wishlist = products.slice(2, 6);
  return (
    <main style={{ maxWidth: '100%', margin: '0 auto', padding: width <= 480 ? '16px 12px 80px' : width <= 768 ? '24px 24px 80px' : '32px 32px 80px' }}>
      <div style={{ marginBottom: 32 }}>
        <Eyebrow>Compte</Eyebrow>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: width <= 480 ? 28 : width <= 768 ? 36 : 42, fontWeight: 700, margin: '8px 0 0', letterSpacing: '-0.02em' }}>Salut, Patrice 👋</h1>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: width <= 768 ? '1fr' : '240px 1fr', gap: width <= 768 ? 24 : 40 }}>
        {/* Side nav */}
        <nav style={{ display: width <= 768 ? 'grid' : 'flex', gridTemplateColumns: width <= 768 ? 'repeat(auto-fit, minmax(120px, 1fr))' : undefined, flexDirection: width <= 768 ? undefined : 'column', gap: width <= 768 ? 12 : 4 }}>
          {[
            ['orders', 'Commandes', 'package'],
            ['wishlist', 'Wishlist', 'heart'],
            ['addresses', 'Adresses', 'map-pin'],
            ['profile', 'Profil', 'user'],
            ['logout', 'Déconnexion', 'log-out'],
          ].map(([k, lbl, ic]) => (
            <button key={k} onClick={() => setSection(k)} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: width <= 480 ? '10px 8px' : '12px 14px',
              border: 0, background: section === k ? '#2A2D34' : 'transparent',
              color: section === k ? '#F5F5F2' : '#2A2D34',
              fontFamily: "'Manrope', sans-serif", fontSize: width <= 480 ? 12 : 14, fontWeight: 500, cursor: 'pointer',
              textAlign: 'left', borderRadius: 2, whiteSpace: 'nowrap',
            }}>
              {width <= 768 && <i data-lucide={ic} style={{ width: 16, height: 16 }}/>}
              {width > 480 && lbl}
            </button>
          ))}
        </nav>
        {/* Content */}
        <div>
          {section === 'orders' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { id: 'TS-2026-04812', date: '02 mai 2026', total: 314.89, status: 'Expédiée', items: 3 },
                { id: 'TS-2026-04590', date: '24 avril 2026', total: 89.90, status: 'Livrée', items: 1 },
                { id: 'TS-2026-04221', date: '08 avril 2026', total: 24.90, status: 'Livrée', items: 1 },
              ].map(o => (
                <div key={o.id} style={{ display: 'grid', gridTemplateColumns: width <= 480 ? '1fr' : width <= 768 ? '1fr auto' : '1fr auto auto auto', gap: 12, alignItems: width <= 480 ? 'flex-start' : 'center', padding: '16px', background: 'white', border: '1px solid #E2E1DB', borderRadius: 4 }}>
                  <div>
                    <Eyebrow>{o.id}</Eyebrow>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600, marginTop: 4 }}>{o.items} article{o.items > 1 ? 's' : ''} · {o.date}</div>
                  </div>
                  <span style={{ padding: '5px 9px', background: o.status === 'Expédiée' ? '#E6F1FB' : '#E8F6EE', color: o.status === 'Expédiée' ? '#0058A6' : '#0F6938', fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, width: 'fit-content' }}>{o.status}</span>
                  {width > 768 && <Price value={o.total} size="md"/>}
                  {width > 768 && <Button variant="outline" size="sm">Détails →</Button>}
                </div>
              ))}
            </div>
          )}
          {section === 'wishlist' && (
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${width <= 480 ? 1 : width <= 768 ? 2 : 3}, 1fr)`, gap: 12 }}>
              {wishlist.map(p => <ProductCard key={p.id} product={p} onOpen={onOpenProduct} onAdd={onAdd}/>)}
            </div>
          )}
          {section === 'addresses' && (
            <div style={{ display: 'grid', gridTemplateColumns: width <= 480 ? '1fr' : 'repeat(2, 1fr)', gap: 16 }}>
              <div style={{ padding: 24, background: 'white', border: '1px solid #E2E1DB', borderRadius: 4 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <Eyebrow>Domicile · par défaut</Eyebrow>
                  <i data-lucide="edit-2" style={{ width: 14, height: 14, color: '#5A5E68', cursor: 'pointer' }}/>
                </div>
                <div style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14, lineHeight: 1.6 }}>
                  Patrice Tossavi<br/>12 rue de la République<br/>75011 Paris<br/>France · +33 6 XX XX XX XX
                </div>
              </div>
              <div style={{ padding: 24, background: 'white', border: '1px dashed #D9D8D2', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}>
                <Button variant="outline" size="md"><i data-lucide="plus" style={{ width: 14, height: 14 }}/> Ajouter une adresse</Button>
              </div>
            </div>
          )}
          {section === 'profile' && (
            <div style={{ maxWidth: 480, display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[['Email', 'patrice@tossavi.fr'], ['Téléphone', '+33 6 XX XX XX XX'], ['Mot de passe', '••••••••••']].map(([k, v]) => (
                <div key={k}>
                  <Eyebrow>{k}</Eyebrow>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 16px', border: '1px solid #D9D8D2', background: 'white', marginTop: 6 }}>
                    <span style={{ fontFamily: "'Manrope', sans-serif", fontSize: 14 }}>{v}</span>
                    <a style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 600, cursor: 'pointer', borderBottom: '1.5px solid #2A2D34' }}>Modifier</a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

window.AccountScreen = AccountScreen;
