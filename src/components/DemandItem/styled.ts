import styled from "styled-components/native";

export const DemandWrapper = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.backgroundClean};
  padding: 14px 26px 14px 24px;
  margin: 6px 0px;
  border-radius: 24px;
`;
