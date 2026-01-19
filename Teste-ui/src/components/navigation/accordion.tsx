import data from './accordion.json';

export default function AccordionMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
