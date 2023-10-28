import { create } from "zustand";
import { StateStorage } from "zustand/middleware";

export interface IProject {
  id?: number;
  name: string;
  urgency: string;
  time: { qtd: string; tempo: string };
  notifications?: string[];
  status: "finalizado" | "adiado" | "em andamento";
  necessity: "Identidade" | "Anuncios" | "Desenvolvimento";
}

interface IAuthProps {
  listPorjects: IProject[];
  setListProjects: (Porject: IProject) => void;
}

export const useProjects = create<IAuthProps>((set) => ({
  listPorjects: [],
  setListProjects: (project: IProject) => {
    set(({ listPorjects }) => ({
      listPorjects: [
        ...listPorjects,
        { ...project, id: listPorjects.length + 1 },
      ],
    }));
  },
}));
