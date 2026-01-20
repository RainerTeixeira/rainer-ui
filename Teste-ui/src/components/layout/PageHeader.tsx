const data = {}
export default function PageHeaderMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
