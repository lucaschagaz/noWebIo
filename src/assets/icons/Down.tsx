import React from "react";
import { Svg, Path } from "react-native-svg";
import { IconBaseProps } from "../../components/Icon";
import { useTheme } from "styled-components";

export const Down = ({ size = 20, color = "Icon" }: IconBaseProps) => {
  const { colors } = useTheme();
  return (
    <Svg width="6" height="4" viewBox="0 0 6 4" fill="none">
      <Path
        d="M3.00001 3.33334L0.333339 0.666669L5.66667 0.666669L3.00001 3.33334Z"
        fill={colors[color]}
      />
    </Svg>
  );
};
