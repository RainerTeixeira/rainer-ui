import data from './badge.json';

export default function BadgeUiMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
