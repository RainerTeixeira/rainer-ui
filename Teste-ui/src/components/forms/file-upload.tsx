import data from './file-upload.json';

export default function FileUploadMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
