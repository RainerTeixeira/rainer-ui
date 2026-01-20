const data = {}
export default function SidebarMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
