import React from "react";
import { Svg, Path } from "react-native-svg";
import { IconBaseProps } from "../../components/Icon";
import { useTheme } from "styled-components";

export const ChevronRigth = ({ size = 20, color = "Icon" }: IconBaseProps) => {
  const { colors } = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 8 12" fill="none">
      <Path
        d="M4.97667 6L0.851669 1.875L2.03 0.696671L7.33334 6L2.03 11.3033L0.851669 10.125L4.97667 6Z"
        fill={colors[color]}
      />
    </Svg>
  );
};
