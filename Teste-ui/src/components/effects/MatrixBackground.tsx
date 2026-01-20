const data = {}
export default function MatrixBackgroundMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
