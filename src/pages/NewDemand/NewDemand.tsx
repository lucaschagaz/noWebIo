import React, { useEffect, useState } from "react";
import {
  ViewStyle,
  TouchableOpacity as RNTouchableOpacity,
  TextInput,
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
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema, IFormProps } from "../../@types/types";
import { IProject, useProjects } from "../../store/usePorjects";
import { useNavigation } from "@react-navigation/native";

export const NewDemand = () => {
  const [necessity, setNecessity] = useState<
    "Identidade" | "Anuncios" | "Desenvolvimento"
  >("Desenvolvimento");
  const { colors } = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormProps>({
    resolver: yupResolver(FormSchema),
  });

  const [showModal, setShowModal] = useState(false);
  const amount = [
    { label: "horas", value: "horas", key: "horas" },
    { label: "semanas", value: "semanas", key: "semanas" },
    { label: "meses", value: "meses", key: "meses" },
  ];
  const urgency = [
    { label: "Padrão", value: "Padrão", key: "Padrão" },
    { label: "Crítica", value: "Crítica", key: "Crítica" },
    { label: "Imediata", value: "Imediata", key: "Imediata" },
  ];
  const [amoutnSelect, setAmoutnSelect] = useState("dias");
  const [urgencySelect, setUrgencySelect] = useState("urgencia");

  const { setListProjects } = useProjects();

  const createProject = (data: FieldValues) => {
    const newProject: IProject = {
      name: data.projectName,
      time: { qtd: data.amount, tempo: amoutnSelect },
      urgency: urgencySelect,
      status: "em andamento",
      necessity: necessity,
    };

    setListProjects(newProject);
    navigation.navigate("Home");
  };

  const navigation = useNavigation();
  const [notification, setNotification] = useState<{
    hora: string;
    minuto: string;
    turn: "AM" | "PM";
  }>({ hora: "10", minuto: "10", turn: "AM" });

  const [erro, setErro] = useState("");
  const handleNotification = () => {
    if (
      Number(notification.hora) > 12 ||
      Number(notification.hora) <= 0 ||
      Number(notification.minuto) > 59 ||
      Number(notification.hora) < 0
    ) {
      setErro("Digite uma hora valida");
    } else {
      setShowModal(false);
      setErro("");
    }
  };

  return (
    <Screen scrolable canGoBack>
      <Modal modalVisible={showModal} setShowModal={setShowModal}>
        <Text variant="headingThree" bold>
          Adicionar notificação
        </Text>
        <Box style={$ModalNotificationBox}>
          <TextInput
            maxLength={2}
            keyboardType="number-pad"
            style={{
              fontSize: 16,
              paddingHorizontal: 10,
              backgroundColor: colors.backgroundClean,
              paddingVertical: 10,
              marginRight: 10,
            }}
            placeholder="hora"
            value={notification.hora}
            onChangeText={(text) =>
              setNotification((prevState) => ({ ...prevState, hora: text }))
            }
          />
          <TextInput
            maxLength={2}
            keyboardType="number-pad"
            style={{
              fontSize: 16,
              paddingHorizontal: 10,
              backgroundColor: colors.backgroundClean,
              paddingVertical: 10,
              marginLeft: 10,
            }}
            value={notification.minuto}
            onChangeText={(text) =>
              setNotification((prevState) => ({ ...prevState, minuto: text }))
            }
            placeholder="minuto"
          />
        </Box>
        {erro != "" && (
          <Text color="Alert" variant="subTitleOne">
            {erro}
          </Text>
        )}
        <Box style={$ModalNotificationBox}>
          <TouchableOpacity
            onPress={() =>
              setNotification((prevState) => ({ ...prevState, turn: "AM" }))
            }
            style={{
              padding: 15,

              backgroundColor:
                notification.turn == "AM"
                  ? colors.Primary_100
                  : colors.PrimaryContrasct,
            }}
          >
            <Text
              style={{
                color:
                  notification.turn == "AM"
                    ? colors.PrimaryContrasct
                    : colors.BackgroundContrasct,
              }}
            >
              AM
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setNotification((prevState) => ({ ...prevState, turn: "PM" }))
            }
            style={{
              padding: 15,

              backgroundColor:
                notification.turn == "PM"
                  ? colors.Primary_100
                  : colors.PrimaryContrasct,
            }}
          >
            <Text
              style={{
                color:
                  notification.turn == "PM"
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
          <Button onPress={handleNotification} text="Adicionar" />
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
      {errors?.projectName && (
        <Text color="Alert">{errors["projectName"]?.message}</Text>
      )}
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
        {errors?.amount && (
          <Text color="Alert">{errors["amount"]?.message}</Text>
        )}
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
              {notification.hora + ":" + notification.minuto} AM
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
        onPress={handleSubmit(createProject)}
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
