import React from "react";
import { Icon } from "../Icon";
import { DemandWrapper } from "./styled";
import { Box } from "../Box/Box";
import { Text } from "../Text/Text";

export const DemandItem = () => {
  return (
    <DemandWrapper>
      <Box style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Icon name="bussines" />
        <Box style={{ marginLeft: 16 }}>
          <Text bold variant="ParagraphTwo">
            Projeto1
          </Text>
          <Box style={{ flexDirection: "row" }}>
            <Text
              color="Icon"
              variant="subTitleOne"
              bold
              style={{ marginRight: 13 }}
            >
              10:00 AM
            </Text>
            <Text color="Icon" variant="subTitleOne" bold>
              finalizado
            </Text>
          </Box>
        </Box>
      </Box>
      <Icon name="chevronRigth" size={15} />
    </DemandWrapper>
  );
};
