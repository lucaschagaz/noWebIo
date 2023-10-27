import React from "react";
import { Svg, Path, G, Defs, Rect, ClipPath } from "react-native-svg";
import { IconBaseProps } from "../../components/Icon";
import { useTheme } from "styled-components";

export const Plus = ({ size = 20, color = "Icon" }: IconBaseProps) => {
  const { colors } = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <Path
        d="M7.83333 7.83334V0.833344H10.1667V7.83334H17.1667V10.1667H10.1667V17.1667H7.83333V10.1667H0.833328V7.83334H7.83333Z"
        fill={colors[color]}
      />
    </Svg>
  );
};
