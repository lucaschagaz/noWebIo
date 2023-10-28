import {
  Pressable,
  Modal as RNModal,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React from "react";
import { Box } from "../Box/Box";
import { useTheme } from "styled-components";

interface IModalProps {
  modalVisible: boolean;
  children: React.ReactNode;
  setShowModal: (value: boolean) => void;
}

export const Modal = ({
  modalVisible = false,
  children,
  setShowModal,
}: IModalProps) => {
  const { colors } = useTheme();

  const handlechange = () => {
    setShowModal(!modalVisible);
  };

  return (
    <RNModal animationType="slide" transparent={true} visible={modalVisible}>
      <Pressable
        onPress={handlechange}
        style={[$PrassableStyleProps, { backgroundColor: colors["BLUR"] }]}
      >
        <Box
          style={[
            $ModalBoxStyle,
            { backgroundColor: colors["PrimaryContrasct"] },
          ]}
        >
          {children}
        </Box>
      </Pressable>
    </RNModal>
  );
};

const $PrassableStyleProps: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};

const $ModalBoxStyle: ViewStyle = {
  zIndex: 999,
  width: 300,
  // minHeight: 200,
  alignItems: "center",
  borderRadius: 14,
};
