import { FastifyInstance } from 'fastify';
import { JwtService } from '../services/jwt-service';
import { SignInController } from '../controllers/sign-in-controller';
import { SignInUseCase } from '../../application/use-cases/sign-in/sign-in-usecase';

const jwtService = new JwtService();
const signInUseCase = new SignInUseCase(jwtService);
const authenticateUserController = new SignInController(signInUseCase);

interface LoginRequestBody {
    email: string;
    password: string;
}

export default async function authRoutes(fastify: FastifyInstance): Promise<void> {
    fastify.route({
        method: "POST",
        url: "/login",
        schema: {
            body: {
                type: 'object',
                properties: {
                    email: { type: 'string' },
                    password: { type: 'string' }
                },
                required: ['email', 'password']
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        token: { type: 'string' }
                    }
                },
                400: {
                    type: 'object',
                    properties: {
                        error: { type: 'string' }
                    }
                }
            }
        },
        handler: async (request, reply) => {
            const { email, password } = request.body as LoginRequestBody;
            const response = await authenticateUserController.handle(email, password);

            if (response.statusCode === 200) {
                return reply.code(200).send(response.body);
            } else {
                return reply.code(400).send(response.body);
            }
        }
    });
}
