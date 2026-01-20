const data = {}
export default function FormMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
