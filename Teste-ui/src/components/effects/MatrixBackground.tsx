import data from './MatrixBackground.json';

export default function MatrixBackgroundMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
