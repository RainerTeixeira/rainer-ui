const data = {}
export default function SeparatorMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
