import data from './avatar.json';

export default function AvatarMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
