const data = {}
export default function PopoverMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
