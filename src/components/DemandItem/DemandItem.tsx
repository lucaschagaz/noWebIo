import React from "react";
import { Icon } from "../Icon";
import { DemandWrapper } from "./styled";
import { Box } from "../Box/Box";
import { Text } from "../Text/Text";
import { IProject } from "../../store/usePorjects";

export const DemandItem = ({
  name,
  status,
  time,
  urgency,
  notifications,
}: IProject) => {
  return (
    <DemandWrapper>
      <Box style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Icon name="bussines" />
        <Box style={{ marginLeft: 16 }}>
          <Text bold variant="ParagraphTwo">
            {name}
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
              {status}
            </Text>
          </Box>
        </Box>
      </Box>
      <Icon name="chevronRigth" size={15} />
    </DemandWrapper>
  );
};
