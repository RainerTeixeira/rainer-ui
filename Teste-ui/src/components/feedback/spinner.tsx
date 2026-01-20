const data = {}
export default function SpinnerMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
