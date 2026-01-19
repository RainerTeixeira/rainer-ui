import data from './tooltip.json';

export default function TooltipMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
