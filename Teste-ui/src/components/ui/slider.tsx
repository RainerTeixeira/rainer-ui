import data from './slider.json';

export default function SliderMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
