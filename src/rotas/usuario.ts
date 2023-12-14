import { Router } from "express";
import { UsuarioRepositorio } from "../repositorios/usuario.repositorio";

const rotasUsuario = Router();

rotasUsuario.get("/usuarios", async (req, res) => {
    const usuarios = await UsuarioRepositorio.obterUsuarios();
    res.json({ resultado: usuarios });
});

rotasUsuario.post("/usuario", async (req, res) => {
    const usuarioSalvo = await UsuarioRepositorio.salvarUsuario(req.body);
    
    res.json({ resultado: usuarioSalvo });
});

export {rotasUsuario};