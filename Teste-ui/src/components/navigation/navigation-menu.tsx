import data from './navigation-menu.json';

export default function NavigationMenuMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
