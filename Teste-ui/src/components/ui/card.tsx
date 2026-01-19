import data from './card.json';

export default function CardUiMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
