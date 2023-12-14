import { model } from "mongoose";
import { IUsuario } from "../interfaces/usuario.interface";
import usuarioEsquema from "../esquemas/usuario.esquema";

export default model<IUsuario>('Usuarios', usuarioEsquema)