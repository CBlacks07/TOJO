// Filter rail for PLP
const FilterRail = ({ filters, onChange }) => {
  const groups = [
    { id: 'cat', h: 'Catégorie', opts: [['controllers', 'Manettes', 128], ['headsets', 'Casques', 42], ['stands', 'Stands', 17], ['wheels', 'Volants', 9], ['merch', 'Merch', 96]] },
    { id: 'platform', h: 'Plateforme', opts: [['PS5', 'PS5', 214], ['PS4', 'PS4', 88], ['DIGITAL', 'Digital', 12]] },
    { id: 'brand', h: 'Marque', opts: [['Sony', 'Sony', 188], ['Tossavi', 'Tossavi', 64], ['Pulse', 'Pulse', 22], ['HORI', 'HORI', 18], ['Thrustmaster', 'Thrustmaster', 9]] },
  ];
  const toggle = (group, val) => {
    const cur = filters[group] || [];
    const next = cur.includes(val) ? cur.filter(v => v !== val) : [...cur, val];
    onChange({ ...filters, [group]: next });
  };
  return (
    <aside style={{ width: 260, flexShrink: 0, background: 'white', border: '1px solid #E2E1DB', padding: '24px 24px', display: 'flex', flexDirection: 'column', gap: 24, alignSelf: 'flex-start', position: 'sticky', top: 120 }}>
      {groups.map(g => (
        <div key={g.id} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', paddingBottom: 8, borderBottom: '2px solid #2A2D34' }}>{g.h}</div>
          {g.opts.map(([val, label, count]) => (
            <label key={val} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontFamily: "'Manrope', sans-serif", fontSize: 13 }}>
              <input type="checkbox" checked={(filters[g.id] || []).includes(val)} onChange={() => toggle(g.id, val)} style={{ width: 16, height: 16, accentColor: '#0070D1' }}/>
              {label}
              <span style={{ marginLeft: 'auto', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#8B8F99' }}>{count}</span>
            </label>
          ))}
        </div>
      ))}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', paddingBottom: 8, borderBottom: '2px solid #2A2D34' }}>Prix</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <input defaultValue="0 €" style={{ flex: 1, height: 32, padding: '0 8px', border: '1px solid #D9D8D2', fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}/>
          <span style={{ color: '#8B8F99' }}>—</span>
          <input defaultValue="500 €" style={{ flex: 1, height: 32, padding: '0 8px', border: '1px solid #D9D8D2', fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}/>
        </div>
      </div>
      <Button variant="outline" size="sm" onClick={() => onChange({})}>Réinitialiser</Button>
    </aside>
  );
};

window.FilterRail = FilterRail;
