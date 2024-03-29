import React from "react";
import { Svg, Path } from "react-native-svg";
import { IconBaseProps } from "../../components/Icon";
import { useTheme } from "styled-components";

export const Lupa = ({ size = 20, color = "Icon" }: IconBaseProps) => {
  const { colors } = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <Path
        d="M14.0258 12.8475L17.595 16.4158L16.4158 17.595L12.8475 14.0258C11.5198 15.0902 9.86832 15.6691 8.16666 15.6667C4.02666 15.6667 0.666656 12.3067 0.666656 8.16666C0.666656 4.02666 4.02666 0.666656 8.16666 0.666656C12.3067 0.666656 15.6667 4.02666 15.6667 8.16666C15.6691 9.86832 15.0902 11.5198 14.0258 12.8475ZM12.3542 12.2292C13.4118 11.1416 14.0024 9.68368 14 8.16666C14 4.94332 11.3892 2.33332 8.16666 2.33332C4.94332 2.33332 2.33332 4.94332 2.33332 8.16666C2.33332 11.3892 4.94332 14 8.16666 14C9.68368 14.0024 11.1416 13.4118 12.2292 12.3542L12.3542 12.2292Z"
        fill={colors[color]}
      />
    </Svg>
  );
};
