import React from "react";
import { Svg, Path } from "react-native-svg";
import { IconBaseProps } from "../../components/Icon";
import { useTheme } from "styled-components";

export const Message = ({ size = 20, color = "Icon" }: IconBaseProps) => {
  const { colors } = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 18 16" fill="none">
      <Path
        d="M0.666673 5.49501C0.666234 4.83851 0.795299 4.18837 1.04648 3.58183C1.29766 2.97528 1.66602 2.42424 2.13046 1.96026C2.59491 1.49628 3.14632 1.12847 3.75311 0.877898C4.35991 0.627326 5.01018 0.498911 5.66667 0.500007H12.3333C15.0942 0.500007 17.3333 2.74584 17.3333 5.49501V15.5H5.66667C2.90584 15.5 0.666673 13.2542 0.666673 10.505V5.49501ZM10.6667 7.16667V8.83334H12.3333V7.16667H10.6667ZM5.66667 7.16667V8.83334H7.33334V7.16667H5.66667Z"
        fill={colors[color]}
      />
    </Svg>
  );
};
