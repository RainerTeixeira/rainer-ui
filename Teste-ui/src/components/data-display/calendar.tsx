import data from './calendar.json';

export default function CalendarMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
