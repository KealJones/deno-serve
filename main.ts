import { serve } from "./deps.ts";

const server = serve({ port: 8000 });

console.log("Now serving on port 8000 🔥");

for await (const req of server) {
    req.respond({ body: "Hello World"});
}