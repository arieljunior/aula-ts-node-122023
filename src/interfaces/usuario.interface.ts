export enum PerfisEnum {
    ADM = 'administrador',
    COMUM = 'comum'
}

export interface IUsuario {
	nome: string;
	email: string;
	perfis: PerfisEnum[];
}