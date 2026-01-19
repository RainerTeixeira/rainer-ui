import data from './search-input.json';

export default function SearchInputMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
