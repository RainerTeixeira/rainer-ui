const data = {}
export default function CodeMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
