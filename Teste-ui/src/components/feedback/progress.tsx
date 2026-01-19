import data from './progress.json';

export default function ProgressMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
