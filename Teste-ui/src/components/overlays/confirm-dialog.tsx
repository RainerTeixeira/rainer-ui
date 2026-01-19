import data from './confirm-dialog.json';

export default function ConfirmDialogMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
