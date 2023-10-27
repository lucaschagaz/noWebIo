import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  background-color: ${({ theme }) => theme.colors.PrimaryContrasct};
  width: 100%;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  width: 100%;
  font-size: 15px;
  height: 48px;
  padding: 0px 16px;
`;
