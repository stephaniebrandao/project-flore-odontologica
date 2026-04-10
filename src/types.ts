export interface IEspecialidades {
    id: number,
    created_at: string,
    nome: string,
    descricao: string,
    slug: string,
    ativo: boolean,
    imagem: string
}

export type Horarios = {
    id: string,
    create_at: string,
    hora: string,
}

export interface ICorpoClinico {
    id: number,
    nome: string,
    especialidade: string,
    slug: string,
    imagens: string,
}