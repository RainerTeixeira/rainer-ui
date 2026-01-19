import data from './modal.json';

export default function ModalMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
