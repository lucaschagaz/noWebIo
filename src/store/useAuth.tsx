import { create } from "zustand";

interface IAuthProps {
  auth: boolean;
  setLogged: (auth: boolean) => void;
  userData: { name: string; password: string };
}

export const useAuth = create<IAuthProps>((set) => ({
  auth: false,
  userData: { name: "lucas", password: "1234567" },
  setLogged: (authState: boolean) => {
    set({ auth: authState });
  },
}));
