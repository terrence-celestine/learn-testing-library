import { setupServer } from "msw/lib/node";
import { handlers } from "./handlers";

const server = setupServer(...handlers);

export default server;
