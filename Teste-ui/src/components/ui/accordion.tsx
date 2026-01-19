import data from './accordion.json';

export default function AccordionUiMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
