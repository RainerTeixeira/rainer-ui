const data = {}
export default function LabelMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
