const data = {}
export default function DialogMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
