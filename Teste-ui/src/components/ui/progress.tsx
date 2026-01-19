import data from './progress.json';

export default function ProgressUiMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
