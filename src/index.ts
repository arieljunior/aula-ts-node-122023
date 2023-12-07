var minha_variavel: object
minha_variavel = {};

function minha_funcao():void { }

enum Perfis {
    ADM = "adm",
    COMUM = "comum",
}

interface Ix {
	x: string;
	y: number;
	z: any;
}
interface IUser {
	id: string | number;
	name: string;
	email: string;
	perfil: Perfis;
	// perfil: "adm" | "comum" | 1;
	cor?: "PRETO" | "BRANCO";
	objeto?: Ix;
	lista: (string | number | boolean)[]; //Array<string>
    tupla: [string, number]

    somar?: (x: number, y: number) => number
}

function isAdm(user: IUser):boolean{
    if(user.perfil === Perfis.ADM) return true
    return false;
}

isAdm({
    id: '1',
    email: '',
    name: '',
    perfil: Perfis.ADM,
    lista: ['', 1, true],
    tupla: ['', 2],
    // somar(x, y) {
    //     return 1
    // },
});

// isAdm({
//     id: 1,
//     email: '',
//     name: '',
//     perfil: Perfis.ADM
// });

class Bairro {
}

class Casa extends Bairro {
	tamanho: number;
	cores: string[];

	constructor(tamanho: number, cores: string[]) {
        super();
		this.tamanho = tamanho;
		this.cores = cores;
		console.log("executou o construtor");
	}

	public algumaCoisa(texto: string) {
		console.log(texto);
	}
}

const casa1 = new Casa(40, [])

console.log(casa1);

var casa2 = new Casa(50, []);
