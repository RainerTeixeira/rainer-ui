const data = {}
export default function NotificationMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
