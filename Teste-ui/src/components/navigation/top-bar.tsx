const mockData = {
  title: 'TopBar Mock',
  links: [],
};

export default function TopBarMock() {
  return <pre>{JSON.stringify(mockData, null, 2)}</pre>;
}
