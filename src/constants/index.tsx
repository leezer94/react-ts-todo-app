export type MockType = {
  category: string;
  id: string;
  title: string;
  completed: boolean;
};

export const ENDPOINT = 'http://localhost:4000' as const;

export const MOCK_DATA: MockType[] = [
  {
    category: '',
    completed: true,
    id: 'sjdjskj1',
    title: '예시 1 번 완료',
  },
  {
    category: '',
    completed: false,
    id: 'sjdjskj2',
    title: '예시 2 번 미완료',
  },
  {
    category: '',
    completed: false,
    id: 'sjdjskj3',
    title: '예시 3 번',
  },
];
