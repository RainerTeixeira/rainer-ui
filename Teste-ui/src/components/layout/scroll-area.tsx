const data = {}
export default function ScrollAreaMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
