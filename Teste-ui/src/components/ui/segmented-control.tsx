import data from './segmented-control.json';

export default function SegmentedControlMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
