import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  padding-right: 16px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundClean};
  flex: 1;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  width: 100%;
  font-weight: 500;
  padding: 0px 10px;
  font-size: 15px;
  height: 48px;
`;
