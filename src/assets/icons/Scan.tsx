import React from "react";
import { Svg, Path } from "react-native-svg";
import { IconBaseProps } from "../../components/Icon";
import { useTheme } from "styled-components";

export const Scan = ({ size = 20, color = "Icon" }: IconBaseProps) => {
  const { colors } = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        d="M10.5 0.5H15.5V4.66667H13.8333V2.16667H10.5V0.5ZM5.5 0.5V2.16667H2.16667V4.66667H0.5V0.5H5.5ZM10.5 15.5V13.8333H13.8333V11.3333H15.5V15.5H10.5ZM5.5 15.5H0.5V11.3333H2.16667V13.8333H5.5V15.5ZM0.5 7.16667H15.5V8.83333H0.5V7.16667Z"
        fill={colors[color]}
      />
    </Svg>
  );
};
