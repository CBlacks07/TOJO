// Shared placeholder shape illustrator. We have no real product photography,
// so render a stylized flat-color silhouette per `shape`, sized to fill its parent.
const ProductShape = ({ shape, tone = 'dark', size = 1 }) => {
  const ink = tone === 'dark' ? '#0E1014'
            : tone === 'light' ? '#2A2D34'
            : tone === 'red' ? '#E14B4B'
            : tone === 'blue' ? '#0070D1'
            : '#2A2D34';
  const bg = tone === 'dark' ? 'linear-gradient(135deg, #1B1E25 0%, #0E1014 100%)'
           : tone === 'light' ? 'linear-gradient(135deg, #ECECE7 0%, #D9D8D2 100%)'
           : tone === 'red' ? 'linear-gradient(135deg, #F2D5D5 0%, #ECECE7 100%)'
           : tone === 'blue' ? 'linear-gradient(135deg, #D9E8F5 0%, #ECECE7 100%)'
           : 'linear-gradient(135deg, #ECECE7 0%, #D9D8D2 100%)';

  const renderShape = () => {
    switch (shape) {
      case 'controller':
        return (
          <svg viewBox="0 0 200 140" width="80%" height="80%">
            <path d="M50 30 Q20 30 15 70 Q10 110 35 115 Q55 117 65 100 L135 100 Q145 117 165 115 Q190 110 185 70 Q180 30 150 30 Q130 30 125 45 L75 45 Q70 30 50 30 Z" fill={ink}/>
            <circle cx="55" cy="70" r="14" fill="none" stroke={tone==='dark'?'#5A5E68':'#F5F5F2'} strokeWidth="2.5"/>
            <circle cx="145" cy="70" r="14" fill="none" stroke={tone==='dark'?'#5A5E68':'#F5F5F2'} strokeWidth="2.5"/>
            <circle cx="100" cy="62" r="3" fill={tone==='dark'?'#C6FF3D':'#0070D1'}/>
          </svg>
        );
      case 'headset':
        return (
          <svg viewBox="0 0 160 160" width="80%" height="80%">
            <path d="M40 90 Q40 30 80 30 Q120 30 120 90" fill="none" stroke={ink} strokeWidth="8" strokeLinecap="round"/>
            <rect x="22" y="80" width="32" height="50" rx="14" fill={ink}/>
            <rect x="106" y="80" width="32" height="50" rx="14" fill={ink}/>
            <path d="M138 105 Q150 110 145 130" fill="none" stroke={ink} strokeWidth="4" strokeLinecap="round"/>
          </svg>
        );
      case 'stand':
        return (
          <svg viewBox="0 0 140 160" width="70%" height="80%">
            <rect x="35" y="20" width="70" height="100" rx="3" fill={ink}/>
            <rect x="20" y="120" width="100" height="14" rx="2" fill={ink} opacity="0.7"/>
            <rect x="50" y="40" width="40" height="6" fill={tone==='dark'?'#0070D1':'#F5F5F2'}/>
          </svg>
        );
      case 'bottle':
        return (
          <svg viewBox="0 0 100 180" width="50%" height="90%">
            <rect x="35" y="10" width="30" height="20" fill={ink}/>
            <rect x="25" y="30" width="50" height="140" rx="8" fill={ink}/>
            <rect x="35" y="80" width="30" height="3" fill="#C6FF3D"/>
            <text x="50" y="110" textAnchor="middle" fill="#C6FF3D" fontFamily="monospace" fontSize="10" fontWeight="700">PT</text>
          </svg>
        );
      case 'wheel':
        return (
          <svg viewBox="0 0 160 160" width="80%" height="80%">
            <circle cx="80" cy="80" r="60" fill="none" stroke={ink} strokeWidth="14"/>
            <circle cx="80" cy="80" r="22" fill={ink}/>
            <rect x="78" y="20" width="4" height="40" fill={ink}/>
            <rect x="78" y="100" width="4" height="40" fill={ink}/>
            <rect x="20" y="78" width="40" height="4" fill={ink}/>
            <rect x="100" y="78" width="40" height="4" fill={ink}/>
          </svg>
        );
      case 'card':
        return (
          <svg viewBox="0 0 200 130" width="85%" height="75%">
            <rect x="10" y="10" width="180" height="110" rx="8" fill={ink}/>
            <rect x="20" y="22" width="38" height="28" rx="3" fill="#C6FF3D" opacity="0.9"/>
            <text x="100" y="80" fill="#F5F5F2" fontFamily="'Space Grotesk',sans-serif" fontWeight="700" fontSize="22" textAnchor="middle">PSN · 50€</text>
            <text x="100" y="105" fill="#F5F5F2" fontFamily="monospace" fontSize="10" textAnchor="middle" opacity="0.6">XXXX  XXXX  XXXX</text>
          </svg>
        );
      case 'hoodie':
        return (
          <svg viewBox="0 0 160 160" width="80%" height="85%">
            <path d="M30 50 L60 30 Q80 22 100 30 L130 50 L140 100 L120 110 L120 145 L40 145 L40 110 L20 100 Z" fill={ink}/>
            <path d="M60 30 Q80 50 100 30" fill="none" stroke={tone==='dark'?'#3A3F4A':'#F5F5F2'} strokeWidth="3"/>
            <text x="80" y="100" fill="#C6FF3D" fontFamily="'Space Grotesk',sans-serif" fontWeight="700" fontSize="14" textAnchor="middle">SQUAD</text>
          </svg>
        );
      case 'mug':
        return (
          <svg viewBox="0 0 160 140" width="75%" height="80%">
            <rect x="30" y="30" width="80" height="90" rx="6" fill={ink}/>
            <path d="M110 50 Q140 50 140 80 Q140 110 110 110" fill="none" stroke={ink} strokeWidth="8"/>
            <circle cx="55" cy="70" r="6" fill="#1D6FE0"/>
            <circle cx="75" cy="70" r="6" fill="#E14B4B"/>
            <circle cx="55" cy="90" r="6" fill="#E64FAE"/>
            <circle cx="75" cy="90" r="6" fill="#2BB573"/>
          </svg>
        );
      case 'arcade':
        return (
          <svg viewBox="0 0 200 140" width="85%" height="80%">
            <rect x="10" y="40" width="180" height="80" rx="6" fill={ink}/>
            <circle cx="55" cy="80" r="14" fill="#E14B4B"/>
            <circle cx="105" cy="65" r="9" fill="#1D6FE0"/>
            <circle cx="135" cy="75" r="9" fill="#E14B4B"/>
            <circle cx="165" cy="65" r="9" fill="#E64FAE"/>
            <circle cx="135" cy="100" r="9" fill="#2BB573"/>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 100 100" width="60%" height="60%"><rect width="100" height="100" fill={ink}/></svg>
        );
    }
  };

  return (
    <div style={{
      width: '100%', height: '100%',
      background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      {renderShape()}
    </div>
  );
};

window.ProductShape = ProductShape;
