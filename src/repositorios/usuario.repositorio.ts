import { IUsuario } from "../interfaces/usuario.interface";
import usuarioModelo from "../modelos/usuario.modelo";

export class UsuarioRepositorio {
	static async salvarUsuario(usuario: IUsuario): Promise<IUsuario> {
		const novoUsuario = new usuarioModelo(usuario);
		const usuarioSalvo = await novoUsuario.save();
		return usuarioSalvo;
	}

	static async obterUsuarios(): Promise<IUsuario[]> {
		const usuarios = await usuarioModelo.find();
		return usuarios;
	}
}