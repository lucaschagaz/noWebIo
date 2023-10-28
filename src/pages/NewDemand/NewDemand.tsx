import React, { useState } from "react";
import {
  ViewStyle,
  TouchableOpacity as RNTouchableOpacity,
} from "react-native";

import { Screen } from "../../components/Screen/Screen";
import { Text } from "../../components/Text/Text";
import { Box } from "../../components/Box/Box";
import { Icon } from "../../components/Icon";
import { useTheme } from "styled-components";

import Picker from "react-native-picker-select";

import { TouchableOpacity } from "./styled";
import { Button } from "../../components/Button/Button";
import { Modal } from "../../components/Modal/Modal";
import { AddButton } from "../../components/AddButton/AddButton";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema, IFormProps } from "../../@types/types";

export const NewDemand = () => {
  const [necessity, setNecessity] = useState<
    "Identidade" | "Anuncios" | "Desenvolvimento"
  >("Desenvolvimento");
  const { colors } = useTheme();

  const { control, handleSubmit } = useForm<IFormProps>({
    resolver: yupResolver(FormSchema),
  });

  const [showModal, setShowModal] = useState(false);
  const amount = [
    { label: "horas", value: "horas" },
    { label: "semanas", value: "semanas" },
    { label: "meses", value: "meses" },
  ];
  const urgency = [
    { label: "Padrão", value: "Padrão" },
    { label: "Crítica", value: "Crítica" },
    { label: "Imediata", value: "Imediata" },
  ];
  const [amoutnSelect, setAmoutnSelect] = useState("dias");
  const [urgencySelect, setUrgencySelect] = useState("urgencia");
  const [turn, setTurn] = useState("AM");

  const go = () => {};

  return (
    <Screen scrolable canGoBack>
      <Modal modalVisible={showModal} setShowModal={setShowModal}>
        <Text variant="headingThree" bold>
          Adicionar notificação
        </Text>
        <Box style={$ModalNotificationBox}>
          <Input
            keyboardType="number-pad"
            name="hour"
            style={{ marginHorizontal: 10 }}
            control={control}
            placeholder="hora"
          />
          <Input
            keyboardType="number-pad"
            name="minute"
            // style={{ marginHorizontal: 10 }}
            control={control}
            placeholder="minuto"
          />
        </Box>
        <Box style={$ModalNotificationBox}>
          <TouchableOpacity
            onPress={() => setTurn("AM")}
            style={{
              padding: 15,

              backgroundColor:
                turn == "AM" ? colors.Primary_100 : colors.PrimaryContrasct,
            }}
          >
            <Text
              style={{
                color:
                  turn == "AM"
                    ? colors.PrimaryContrasct
                    : colors.BackgroundContrasct,
              }}
            >
              AM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTurn("PM")}
            style={{
              padding: 15,

              backgroundColor:
                turn == "PM" ? colors.Primary_100 : colors.PrimaryContrasct,
            }}
          >
            <Text
              style={{
                color:
                  turn == "PM"
                    ? colors.PrimaryContrasct
                    : colors.BackgroundContrasct,
              }}
            >
              PM
            </Text>
          </TouchableOpacity>
        </Box>
        <Box
          style={{
            padding: 10,
            width: "100%",
          }}
        >
          <Button text="Adicionar" />
        </Box>
      </Modal>
      <Text variant="headingOne" style={{ marginTop: 32 }} bold>
        Nova Demanda
      </Text>
      <Box style={{ marginTop: 12 }}>
        <Text bold>Tipo do projeto</Text>
        <Box
          style={[
            $BoxTypeProject,
            { backgroundColor: colors["backgroundClean"] },
          ]}
        >
          <Icon name="bussines" />
          <Input
            name="projectName"
            control={control}
            placeholder="ex: campanha de marketing"
          />
          <RNTouchableOpacity>
            <Icon name="scan" color="Primary" />
          </RNTouchableOpacity>
        </Box>
      </Box>
      <Box
        style={{
          marginTop: 12,
        }}
      >
        <Text bold>Urgência & Tempo esperado</Text>
        <Box style={$BoxTimeWrapper}>
          <Box
            style={[
              $BoxTimeProject,
              { backgroundColor: colors["backgroundClean"] },
            ]}
          >
            <Icon name="exclamation" />
            <Picker
              onValueChange={(value) => setUrgencySelect(value)}
              items={urgency}
              value={urgencySelect}
              placeholder={{ label: urgencySelect }}
              style={{
                viewContainer: {
                  alignItems: "center",
                  flex: 1,
                  justifyContent: "center",
                },
                placeholder: {
                  fontSize: 13,
                  color: colors.BackgroundContrasct,
                },
              }}
            />
            <Icon name="down" />
          </Box>
          <Box
            style={[
              $BoxTimeProject,
              { backgroundColor: colors["backgroundClean"] },
            ]}
          >
            <Icon name="calendar" />
            <Input
              name="amount"
              keyboardType="number-pad"
              control={control}
              placeholder="Qtd."
            />
            <Picker
              onValueChange={(value) => setAmoutnSelect(value)}
              items={amount}
              value={amoutnSelect}
              placeholder={{ label: amoutnSelect }}
              style={{
                viewContainer: {
                  alignItems: "center",
                  flex: 1,
                  justifyContent: "center",
                },
                placeholder: {
                  fontSize: 13,
                  color: colors.BackgroundContrasct,
                },
              }}
            />
            <Icon name="down" />
          </Box>
        </Box>
      </Box>
      <Box style={{ marginTop: 20 }}>
        <Text bold>Necessidades </Text>
        <Box
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => setNecessity("Identidade")}
            style={{
              backgroundColor:
                necessity == "Identidade"
                  ? colors["Primary"]
                  : colors["backgroundClean"],
            }}
          >
            <Icon
              color={necessity == "Identidade" ? "PrimaryContrasct" : "Icon"}
              name="ligth"
              size={60}
            />
            <Text
              style={{ marginTop: 15 }}
              color={necessity == "Identidade" ? "PrimaryContrasct" : "Icon"}
              variant="subTitle"
            >
              Identidade
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setNecessity("Anuncios")}
            style={{
              backgroundColor:
                necessity == "Anuncios"
                  ? colors["Primary"]
                  : colors["backgroundClean"],
            }}
          >
            <Icon
              color={necessity == "Anuncios" ? "PrimaryContrasct" : "Icon"}
              name="voice"
              size={60}
            />
            <Text
              style={{ marginTop: 15 }}
              color={necessity == "Anuncios" ? "PrimaryContrasct" : "Icon"}
              variant="subTitle"
            >
              Anuncios
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setNecessity("Desenvolvimento")}
            style={{
              backgroundColor:
                necessity == "Desenvolvimento"
                  ? colors["Primary"]
                  : colors["backgroundClean"],
            }}
          >
            <Icon
              name="men"
              size={60}
              color={
                necessity == "Desenvolvimento" ? "PrimaryContrasct" : "Icon"
              }
            />
            <Text
              style={{ marginTop: 15 }}
              color={
                necessity == "Desenvolvimento" ? "PrimaryContrasct" : "Icon"
              }
              variant="subTitle"
            >
              Desenvolvimento
            </Text>
          </TouchableOpacity>
        </Box>
      </Box>
      <Box style={{ marginTop: 20 }}>
        <Text bold>Notificações</Text>
        <Box style={[$BoxTimeWrapper, { alignItems: "center" }]}>
          <Box
            style={[
              $BoxNotificationStyle,
              { backgroundColor: colors["backgroundClean"] },
            ]}
          >
            <Icon name="notificationFill" />
            <Text style={{ marginLeft: 18 }} variant="headingThree" bold>
              10:00 AM
            </Text>
          </Box>
          <AddButton
            size="48"
            radius="14"
            color="Primary"
            onPress={() => setShowModal(true)}
          />
        </Box>
      </Box>
      <Button
        style={{ marginTop: 72 }}
        text="Enviar"
        onPress={handleSubmit(go)}
      />
    </Screen>
  );
};

const $BoxTypeProject: ViewStyle = {
  flexDirection: "row",
  width: "100%",
  paddingTop: 5,
  borderRadius: 14,
  paddingHorizontal: 14,
  alignItems: "center",
  // justifyContent: "space-between",
};

const $BoxNotificationStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  marginRight: 15,
  flex: 1,
  paddingHorizontal: 14,
  paddingVertical: 5,
  borderRadius: 14,
};

const $BoxTimeProject: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  width: "48%",
  paddingHorizontal: 10,
  borderRadius: 14,
};
const $BoxTimeWrapper: ViewStyle = {
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
};

const $PlusBoxStyle: ViewStyle = {
  width: 48,
  height: 48,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 14,
};

const $ModalNotificationBox: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-around",
  marginTop: 20,
  paddingHorizontal: 10,
};
