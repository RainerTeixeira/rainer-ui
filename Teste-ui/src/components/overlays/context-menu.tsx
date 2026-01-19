import data from './context-menu.json';

export default function ContextMenuMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
