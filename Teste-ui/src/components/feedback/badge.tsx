import data from './badge.json';

export default function BadgeMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
