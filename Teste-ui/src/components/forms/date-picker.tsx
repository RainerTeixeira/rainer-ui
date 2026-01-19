import data from './date-picker.json';

export default function DatePickerMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
