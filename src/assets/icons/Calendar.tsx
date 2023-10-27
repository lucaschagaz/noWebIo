import React from "react";
import { Svg, Path } from "react-native-svg";
import { IconBaseProps } from "../../components/Icon";
import { useTheme } from "styled-components";

export const Calendar = ({ size = 20, color = "Icon" }: IconBaseProps) => {
  const { colors } = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <Path
        d="M0.666656 9.16668H17.3333V16.6667C17.3333 16.8877 17.2455 17.0997 17.0892 17.2559C16.933 17.4122 16.721 17.5 16.5 17.5H1.49999C1.27898 17.5 1.06701 17.4122 0.910734 17.2559C0.754454 17.0997 0.666656 16.8877 0.666656 16.6667V9.16668ZM13.1667 2.50001H16.5C16.721 2.50001 16.933 2.58781 17.0892 2.74409C17.2455 2.90037 17.3333 3.11233 17.3333 3.33334V7.50001H0.666656V3.33334C0.666656 3.11233 0.754454 2.90037 0.910734 2.74409C1.06701 2.58781 1.27898 2.50001 1.49999 2.50001H4.83332V0.833344H6.49999V2.50001H11.5V0.833344H13.1667V2.50001Z"
        fill={colors[color]}
      />
    </Svg>
  );
};
