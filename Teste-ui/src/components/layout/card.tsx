import data from './card.json';

export default function CardMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
