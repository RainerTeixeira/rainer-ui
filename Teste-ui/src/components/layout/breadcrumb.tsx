const data = {}
export default function BreadcrumbMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
