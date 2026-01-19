import data from './spacer.json';

export default function SpacerMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
