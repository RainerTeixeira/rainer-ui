const data = {}
export default function DrawerMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
