import data from './steps.json';

export default function StepsMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
