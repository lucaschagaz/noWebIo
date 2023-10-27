import { Pressable, Modal as RNModal, TouchableOpacity } from "react-native";
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
        onPress={() => handlechange()}
        style={{
          backgroundColor: colors["BLUR"],
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            width: 300,
            minHeight: 200,
            alignItems: "center",
            borderRadius: 14,
            backgroundColor: colors["PrimaryContrasct"],
          }}
        >
          {children}
        </Box>
      </Pressable>
    </RNModal>
  );
};

// onRequestClose={() => {
//     Alert.alert('Modal has been closed.');
//     setModalVisible(!modalVisible);
//   }}
