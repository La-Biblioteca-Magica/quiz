export default function Loading() {
  return <main style={{ display: 'grid', placeItems: 'center' }}>
    <img src="/loading.gif" alt="Loading..." style={{ maxWidth: 'calc(100vw - 32px)', marginInline: 'auto' }} />
  </main>
}