import styled from "styled-components/native";
import { IPressablePorps } from "./AddButton";

export const Pressable = styled.Pressable<IPressablePorps>`
  width: ${({ size }) => (size == "56" ? 56 : 48)}px;
  height: ${({ size }) => (size == "56" ? 56 : 48)}px;
  background-color: ${({ theme, background }) =>
    background ? theme.colors[background] : theme.colors.Primary_opacity};
  border-radius: ${({ radius }) => (radius == "18" ? 18 : 14)}px;
  align-items: center;
  justify-content: center;
`;
