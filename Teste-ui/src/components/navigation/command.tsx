const data = {}
export default function CommandMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
