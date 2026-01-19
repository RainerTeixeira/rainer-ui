import data from './alert-dialog.json';

export default function AlertDialogMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
