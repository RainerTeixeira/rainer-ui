import data from './popover.json';

export default function PopoverMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
