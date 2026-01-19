import data from './command.json';

export default function CommandMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
