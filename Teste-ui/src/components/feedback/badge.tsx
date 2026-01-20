const data = {}
export default function BadgeMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
