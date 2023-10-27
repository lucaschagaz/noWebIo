import React from "react";
import { Screen } from "../../components/Screen/Screen";
import { Input } from "../../components/Input";
import { Icon } from "../../components/Icon";
import { Text } from "../../components/Text/Text";
import { Box } from "../../components/Box/Box";
import { useTheme } from "styled-components";
import { TouchableOpacity, ViewStyle } from "react-native";
import { Image, SeeMore } from "./styles";
import { ScrollViewComponent } from "../../components/Screen/ScreenComponent/ScreenComponent";
import { DemandItem } from "../../components/DemandItem/DemandItem";

export const Home = () => {
  const { colors } = useTheme();

  const arr = [1, 2, 3];
  return (
    <Screen scrolable>
      <Input
        leftComponent={<Icon name="lupa" />}
        placeholder="Buscar projeto"
        style={{ marginBottom: 36 }}
      />
      <Text variant="headingOne" bold>
        Olá
      </Text>
      <Text variant="headingOne">Lucas</Text>
      <Box style={[$boxHomeStyle, { backgroundColor: colors.Primary_100 }]}>
        <Box style={$ProjectsHomeBox}>
          <Box
            style={{
              flex: 1,
              width: "100%",
            }}
          >
            <Box style={{ width: "50%" }}>
              <Text variant="headingTwo" bold>
                Seus Projetos
              </Text>
            </Box>
            <Text variant="subTitleOne">2 de 4 Completos</Text>
          </Box>
          <SeeMore>
            <Text color="Alert">Ver mais</Text>
          </SeeMore>
        </Box>
        <Image source={require("../../assets/img/woman.png")} />
      </Box>
      <Box style={$ProfileHomeBoxStyle}>
        <Text variant="headingThree" bold>
          Daily Review
        </Text>
        <>
          {arr.map((item) => (
            <DemandItem />
          ))}
        </>
      </Box>
    </Screen>
  );
};

const $boxHomeStyle: ViewStyle = {
  flexDirection: "row",
  marginTop: 16,
  justifyContent: "space-between",
  alignItems: "center",
  padding: 24,
  height: 180,
  width: "100%",
  borderRadius: 28,
};

const $ProjectsHomeBox: ViewStyle = {
  flex: 1,
  width: "100%",
  justifyContent: "space-between",
};

const $ProfileHomeBoxStyle: ViewStyle = {
  // flexDirection: "row",
  marginTop: 20,
  // justifyContent: "space-between",
  // alignItems: "center",
  // padding: 24,
  // height: 180,
  width: "100%",
  // borderRadius: 28,
};
