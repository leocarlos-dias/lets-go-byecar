import Fastify, { FastifyInstance } from "fastify";
import cors from '@fastify/cors'
import userRoutes from "./infrastructure/routes/user-route";
import "dotenv/config";
import authRoutes from "./infrastructure/routes/auth-route";

const server: FastifyInstance = Fastify();

server.register(userRoutes);
server.register(authRoutes);

const start = async () => {
  try {
    await server.register(cors)
    await server.listen({ port: 3001 })
    console.log(`Server is running at 3001`);
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()