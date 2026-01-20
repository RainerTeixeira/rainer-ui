const data = {}
export default function SheetMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
