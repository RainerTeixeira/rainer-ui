const data = {}
export default function SpacerMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
