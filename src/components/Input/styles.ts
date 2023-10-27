import styled from "styled-components/native";

interface IWrapperProps {
  widthBox?: number;
  mtBox?: number;
  mbBox?: number;
}

// export const Wrapper = styled.Pressable<IWrapperProps>`
//   width: ${({ widthBox }) => (widthBox ? widthBox : 100)}%;
//   margin-bottom: ${({ mbBox }) => (mbBox ? mbBox : 0)}px;
//   margin-top: ${({ mtBox }) => (mtBox ? mtBox : 0)}px;
// `;

export const Label = styled.Text`
  font-size: 15px;
  margin: 5px 0px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  /* border-radius: 15px; */
  background-color: ${({ theme }) => theme.colors.PrimaryContrasct};
  width: 100%;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  flex: 1;
  font-size: 17px;
  height: 48px;
  padding: 0px 10px;
`;

export const Flag = styled.Image`
  width: 35px;
  height: 35px;
`;
