import data from './sheet.json';

export default function SheetMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
