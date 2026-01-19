import data from './ParticlesEffect.json';

export default function ParticlesEffectMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
