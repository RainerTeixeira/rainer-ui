import data from './rating.json';

export default function RatingMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
