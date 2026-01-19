import data from './dropdown-menu.json';

export default function DropdownMenuMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
