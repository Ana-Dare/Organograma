export interface IColaborador {
  nome: string;
  cargo: string;
  imagem: string;
  time?: string;
  id: string;
  favorito: boolean;
}

export type NovoColaborador = Omit<IColaborador, "id" | "favorito">;
