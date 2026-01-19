import data from './InstallPrompt.json';

export default function InstallPromptMock() {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
