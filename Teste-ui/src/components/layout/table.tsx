const data = {}
export default function TableMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
