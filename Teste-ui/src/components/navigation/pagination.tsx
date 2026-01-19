import data from './pagination.json';

export default function PaginationMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
