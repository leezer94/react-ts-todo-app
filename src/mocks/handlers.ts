import { rest } from 'msw';

const todos = ['먹기', '자기', '놀기'];

export const handlers = [
  rest.get('/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),

  rest.post('/', (req: { body: any }, res, ctx) => {
    todos.push(req.body);

    return res(ctx.status(201));
  }),
];
