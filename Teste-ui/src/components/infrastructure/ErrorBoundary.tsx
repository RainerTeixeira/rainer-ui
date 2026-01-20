const data = {}
export default function ErrorBoundaryMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
