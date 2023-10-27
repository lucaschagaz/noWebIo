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

  const go = () => {};

  return (
    <>
      <Screen scrolable canGoBack>
        <Modal modalVisible={showModal} setShowModal={setShowModal}>
          <Text variant="headingThree" bold>
            Adicionar notificação
          </Text>
          <Box style={{ flexDirection: "row" }}>
            <Input name="hour" control={control} placeholder="hora" />
            <Input name="minute" control={control} placeholder="minuto" />
          </Box>
          <Button text="Adicionar" />
        </Modal>
        <Text variant="headingOne" style={{ marginTop: 32 }} bold>
          Nova Demanda
        </Text>
        <Box style={{ marginTop: 12 }}>
          <Text bold>Tipo do projeto</Text>
          <Box style={$BoxTypeProject}>
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
        <Box style={{ marginTop: 12, flex: 1 }}>
          <Text bold>Urgência & Tempo esperado</Text>
          <Box style={$BoxTimeWrapper}>
            <Box style={$BoxTimeProject}>
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
            <Box style={$BoxTimeProject}>
              <Icon name="calendar" />
              <Input
                name="amount"
                control={control}
                placeholder="Qtd."
                value={"30"}
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
                    : colors["PrimaryContrasct"],
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
                    : colors["PrimaryContrasct"],
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
                    : colors["PrimaryContrasct"],
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
            <Box style={$BoxTimeProject}>
              <Icon name="notificationFill" />
              <Text variant="headingThree" bold>
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
          style={{ marginTop: 70 }}
          text="Enviar"
          onPress={handleSubmit(go)}
        />
      </Screen>
    </>
  );
};

const $BoxTypeProject: ViewStyle = {
  flexDirection: "row",
  width: "100%",
  paddingTop: 5,
  paddingHorizontal: 14,
  alignItems: "center",
  justifyContent: "space-between",
};

const $BoxTimeProject: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  width: "45%",
  flex: 1,
  paddingHorizontal: 16,
  paddingVertical: 14,
  justifyContent: "space-around",
};
const $BoxTimeWrapper: ViewStyle = {
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-around",
};

const $PlusBoxStyle: ViewStyle = {
  width: 48,
  height: 48,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 14,
};
