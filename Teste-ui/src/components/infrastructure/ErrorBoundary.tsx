import data from './ErrorBoundary.json';

export default function ErrorBoundaryMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
