import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Altus UI'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #000000, #111111)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: 'white',
          padding: '0 80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 60,
            filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.2))',
          }}
        >
          <svg
            width="240"
            height="240"
            viewBox="0 0 220.38 272.89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M102.01,264.22c2.5-9.1,7.38-18.38,11.78-26.72,1.05-2,2.44-3.87,3.51-5.86.55-1.02-.68-2.06-1.6-1.36-9.54,7.3-19.67,14.34-30.18,20.08-24.36,13.32-58.05,25.87-77.12-2.53-11.89-17.71-11.33-41.88,2.74-58.14,15.91-18.4,42.01-21.44,65.12-18.07,1.16.17,1.7-1.37.7-1.97l-19-11.4s-.05-.03-.07-.05c-21.91-15.4-32.95-32.57-26.87-60.43,2.78-12.7,9.17-25.16,10.18-38.33,1.1-14.4-3.02-27.24-3.7-41.1-.38-7.64,1.21-16.92,10.35-18.17,16.98-2.32,41.53,18.03,53.26,29.19,20.71,19.7,36.89,47.37,45.18,74.77,2.09,6.91,3.66,13.95,5.12,21,.27,1.28,2.15,1.06,2.12-.24h0s0-.06,0-.09c-2.07-19.81-6.51-39.06-15.2-57-7.31-15.09-16.78-27.97-27.54-40.7-.23-.27-.31-.64-.21-.98,3.54-12.59,7.73-25.99,22.4-13.61,24.27,20.48,35.46,61.08,37.43,91.77,1.64,25.49-3.21,51.82-10.74,76.13-.29.94.73,1.74,1.57,1.23l4.17-2.53c.09-.05.18-.09.28-.12l1.67-.44c.51-.13.83-.63.77-1.15-1.46-14.19,19.11-19.47,24-6.25,3.93,10.62-5.16,18.65-15.23,16.49-.64-.14-1.23.34-1.27.99-1.35,19.71-20.18,30.91-33.17,43.25-6.96,6.61-14.49,14.78-20.25,22.46-3.59,4.8-8.59,15.25-11.91,18.53"
            />
            <path
              fill="white"
              fillOpacity="0.8"
              d="M206.84,149.68c-3.63,4.39-9.6,10.05-14.89,12.26-.48.2-1.34,1.15-1.75.36,6.91-6.32,12.7-13.78,16.8-22.23,4.46-9.2,6.64-16.96,5.9-27.37-.24-3.34-2.7-9.49-2.55-11.45.19-2.64,1.66-3.88,4.33-3.55,4.36.54,5.38,8.94,5.61,12.36.92,14.12-4.51,28.83-13.44,39.62Z"
            />
            <path
              fill="white"
              fillOpacity="0.6"
              d="M184.92,160.44c7.75-13.84,12.71-32.95,7.63-48.5-.86-2.63-5.57-11.18-5.48-12.95.04-.74,1.45-2.7,2.08-3.14,5.53-3.84,8.68,5.29,9.75,9.21,4.36,15.95,1.22,34.86-7.75,48.69-.5.77-5.24,7.67-6.23,6.68Z"
            />
          </svg>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              fontSize: 100,
              fontWeight: 900,
              letterSpacing: '-0.05em',
              lineHeight: 0.8,
              marginBottom: 20,
              background: 'white',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Altus UI
          </div>
          <div
            style={{
              fontSize: 34,
              color: '#a1a1aa',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              maxWidth: 600,
            }}
          >
            Professional Component Suite
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
