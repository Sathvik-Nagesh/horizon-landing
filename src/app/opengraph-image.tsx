import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'HORIZON - Spatial Computing & Immersive AI';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#050510',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background gradient flares */}
        <div 
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '50%',
            height: '50%',
            background: 'radial-gradient(circle, rgba(102,126,234,0.3) 0%, transparent 70%)',
          }}
        />
        <div 
          style={{
            position: 'absolute',
            bottom: '-20%',
            right: '-10%',
            width: '60%',
            height: '60%',
            background: 'radial-gradient(circle, rgba(240,147,251,0.2) 0%, transparent 70%)',
          }}
        />

        {/* Central Logo and Text */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
          <span style={{ fontSize: '60px', color: '#667eea', background: 'linear-gradient(135deg, #667eea, #f093fb)', backgroundClip: 'text', color: 'transparent' }}>◈</span>
          <span style={{ fontSize: '80px', fontWeight: 800, color: '#fff', letterSpacing: '0.2em' }}>HORIZON</span>
        </div>

        <p style={{ fontSize: '32px', color: 'rgba(255, 255, 255, 0.7)', textAlign: 'center', maxWidth: '800px', lineHeight: 1.4 }}>
          Architecting the foundational layer for spatial computing and immersive AI.
        </p>
        
        {/* Decorative Grid or UI element simulation */}
        <div style={{ display: 'flex', gap: '24px', marginTop: '60px' }}>
             <div style={{ padding: '16px 32px', borderRadius: '100px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '24px' }}>
                Quantum Rendering 
             </div>
             <div style={{ padding: '16px 32px', borderRadius: '100px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '24px' }}>
                Neural Networks
             </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
