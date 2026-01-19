import data from './social-bar.json';

export default function SocialBarMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
