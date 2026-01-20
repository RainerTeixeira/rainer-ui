const data = {}
export default function ContainerMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
