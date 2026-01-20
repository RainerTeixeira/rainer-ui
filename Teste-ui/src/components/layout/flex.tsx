const data = {}
export default function FlexMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
