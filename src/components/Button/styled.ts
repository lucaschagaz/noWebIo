import styled from "styled-components/native";
import { ThemeColor } from "../../Styles/Theme/theme";

interface IWrapperProps {
  color?: keyof ThemeColor;
}

export const Wrapper = styled.TouchableOpacity<IWrapperProps>`
  width: 100%;
  padding: 9px 0px;
  background-color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.Primary};
  border-radius: 14px;
  align-items: center;
  justify-content: center;
`;
