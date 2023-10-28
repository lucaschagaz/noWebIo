import { create } from "zustand";

interface IAuthProps {
  auth: boolean;
  setLogged: (auth: boolean) => void;
  firstUserAccess: boolean;
  setFirstUserAccess: (firstUserAccess: boolean) => void;
}

export const useLogged = create<IAuthProps>((set) => ({
  auth: false,
  setLogged: (authState: boolean) => {
    set({ auth: authState });
  },
  firstUserAccess: true,
  setFirstUserAccess: (firstTime: boolean) => {
    set({ firstUserAccess: firstTime });
  },
}));
