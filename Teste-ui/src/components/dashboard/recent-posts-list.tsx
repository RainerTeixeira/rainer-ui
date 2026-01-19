import data from './recent-posts-list.json';

export default function RecentPostsListMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
