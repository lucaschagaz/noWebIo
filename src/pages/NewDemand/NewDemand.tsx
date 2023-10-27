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

import { TouchableOpacity } from "./styled";
import { Button } from "../../components/Button/Button";

export const NewDemand = () => {
  const [necessity, setNecessity] = useState<
    "Identidade" | "Anuncios" | "Desenvolvimento"
  >("Desenvolvimento");

  const { colors } = useTheme();

  return (
    <Screen scrolable canGoBack>
      <Text variant="headingOne" style={{ marginTop: 32 }} bold>
        Nova Demanda
      </Text>
      <Box style={{ marginTop: 12 }}>
        <Text bold>Tipo do projeto</Text>
        <Box style={$BoxTypeProject}>
          <Icon name="calendar" />
          <Text>Campanha de marketing</Text>
          <RNTouchableOpacity>
            <Icon name="scan" color="Primary" />
          </RNTouchableOpacity>
        </Box>
      </Box>
      <Box style={{ marginTop: 12 }}>
        <Text bold>Urgência & Tempo esperado</Text>
        <Box style={$BoxTimeWrapper}>
          <Box style={$BoxTimeProject}>
            <Icon name="plus" />
            <Text>Urgencia</Text>
          </Box>
          <Box style={$BoxTimeProject}>
            <Icon name="calendar" />
            <Text>30</Text>
            <Text>dias</Text>
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
          <RNTouchableOpacity
            style={[
              $PlusBoxStyle,
              { backgroundColor: colors["Primary_opacity"] },
            ]}
          >
            <Icon name="plus" color="Primary" />
          </RNTouchableOpacity>
        </Box>
      </Box>
      <Button style={{ marginTop: 70 }} text="Enviar" />
    </Screen>
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
  paddingHorizontal: 16,
  paddingVertical: 14,
  justifyContent: "space-between",
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
