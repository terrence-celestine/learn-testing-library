import { rest } from "msw";

export const handlers = [
  rest.get("/", (_req, res, ctx) => {
    return res.once(
      ctx.status(500),
      ctx.json({
        error: "error",
      })
    );
  }),
];
