import data from './textarea.json';

export default function TextareaMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
