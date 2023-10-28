import { useSafeAreaInsets } from "react-native-safe-area-context";

export const useAppSafeArea = () => {
  const { top, bottom } = useSafeAreaInsets();

  return {
    top: Math.max(top, 52),
    bottom: Math.max(bottom, 20),
  };
};
