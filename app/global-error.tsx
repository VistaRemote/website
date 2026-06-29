'use client'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          background: '#0d1117',
          color: '#e6edf3',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <h2 style={{ margin: 0, fontSize: 20 }}>Something went wrong</h2>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            padding: '8px 16px',
            borderRadius: 6,
            border: '1px solid #21334a',
            background: '#161f2e',
            color: '#e6edf3',
            cursor: 'pointer',
          }}
        >
          Try again
        </button>
      </body>
    </html>
  )
}
