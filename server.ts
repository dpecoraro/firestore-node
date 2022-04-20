import fastify from "fastify";
import { UserRepository } from "./repository/userRepository";

const server = fastify();

const userRepository = new UserRepository();

server.get('/ping', async (req, resp) => {
    userRepository.put({
        nome: 'teste',
        birth: "teste123",
        age: "23232"
    })
    return 'pong'
})

server.listen(8000, (err, address) => {
    if (err) {
        console.log(err);
        process.exit();
    }
    console.log(`Server listen at ${address}`);
})