import data from './skeleton.json';

export default function SkeletonMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
