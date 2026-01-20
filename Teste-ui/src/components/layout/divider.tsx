const data = {}
export default function DividerMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
