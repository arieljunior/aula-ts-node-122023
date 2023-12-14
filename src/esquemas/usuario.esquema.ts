import { Schema } from 'mongoose'
import { IUsuario } from '../interfaces/usuario.interface'

export default new Schema<IUsuario>({
    email: String,
    nome: String,
    perfis: [String],
})