import data from './phone-input.json';

export default function PhoneInputMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
