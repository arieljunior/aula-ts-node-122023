import "dotenv/config";
import express, { Response, Request } from "express";
import { rotasUsuario } from "./rotas/usuario";
import { connect } from "mongoose";

const servidor = express();
const PORTA = 3000;

const PASSWORD_MONGODB = process.env.PASSWORD_MONGODB || "";
const HOST_MONGODB = process.env.HOST_MONGODB || "";
const COMPLEMENT_MONGODB = process.env.COMPLEMENT_MONGODB || "";

async function conectarMongoDB() {
	await connect(
		`mongodb+srv://${HOST_MONGODB}:${PASSWORD_MONGODB}@${COMPLEMENT_MONGODB}/?retryWrites=true&w=majority`
	);
}

servidor.use(express.json());

servidor.get("/", (request: Request, response: Response) => {
	response.send("Olá mundo");
});

servidor.use(rotasUsuario);

servidor.listen(PORTA, async () => {
    console.log(`Servidor rodando na porta ${PORTA}`)
    await conectarMongoDB();
    console.log("MongoDB conectado com sucesso")
});
