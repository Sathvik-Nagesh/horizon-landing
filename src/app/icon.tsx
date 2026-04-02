import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #050510, #1a1a2e)',
          borderRadius: '25%',
          border: '2px solid rgba(102,126,234,0.8)',
          color: '#fff',
          fontSize: '22px',
          fontWeight: 600,
        }}
      >
        ◈
      </div>
    ),
    { ...size }
  );
}
