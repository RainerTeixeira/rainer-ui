import data from './link-button.json';

export default function LinkButtonMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
