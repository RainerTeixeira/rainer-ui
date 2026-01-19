import data from './textarea.json';

export default function TextareaUiMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
