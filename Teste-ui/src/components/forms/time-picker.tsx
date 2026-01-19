import data from './time-picker.json';

export default function TimePickerMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
