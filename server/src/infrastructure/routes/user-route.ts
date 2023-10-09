import { FastifyInstance } from 'fastify';
import { HttpClient } from '../http/http';
import { GetUserController } from '../controllers/get-user-controller';
import { JwtService } from '../services/jwt-service';
import { GetUserByTokenUseCase } from '../../application/use-cases/get-user/get-user-by-token-usecase';

const httpClient = new HttpClient();
const jwtService = new JwtService();
const getUserByToken = new GetUserByTokenUseCase(httpClient, jwtService);
const getUserController = new GetUserController(getUserByToken);

export default async function userRoutes(fastify: FastifyInstance): Promise<void> {
  fastify.route({
    method: "GET",
    url: "/users",
    schema: {
      querystring: {
        token: { type: "string" },
      },
      response: {
        200: {
          type: "object",
          properties: {
            name: { type: "string" },
            email: { type: "string" },
            cellphone: { type: "string" },
          },
        },
      },
    },

    preHandler: async (request, reply) => {
      const token = request.headers.authorization?.split(" ")[1];

      if (!token) {
        return reply.code(401).send("Unauthorized");
      }

      const response = await getUserController.handle(token);

      return reply.code(response.statusCode).send(response.body);
    },

    handler: async (request, reply) => {
      const token = request.headers.authorization?.split(" ")[1];

      if (!token) {
        return reply.code(401).send("Unauthorized");
      }

      const response = await getUserController.handle(token);

      return reply.code(response.statusCode).send(response.body);
    },
  });
}
