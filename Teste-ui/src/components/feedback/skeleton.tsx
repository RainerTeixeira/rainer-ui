const data = {}
export default function SkeletonMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
