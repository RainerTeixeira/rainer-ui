const data = {}
export default function LoadingScreenMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
