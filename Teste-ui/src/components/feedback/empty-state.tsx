const data = {}
export default function EmptyStateMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
