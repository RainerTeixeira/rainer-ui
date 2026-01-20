const data = {}
export default function QuickStatsMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
