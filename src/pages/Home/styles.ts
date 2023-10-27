import styled from "styled-components/native";

export const Image = styled.Image`
  width: 124px;
  height: 124px;
`;

export const SeeMore = styled.TouchableOpacity`
  width: 65px;
  border-bottom-color: ${({ theme }) => theme.colors.Alert};
  border-bottom-width: 2px;
`;
