import data from './BackToTop.json';

export default function BackToTopMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
