import data from './carousel.json';

export default function CarouselMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
