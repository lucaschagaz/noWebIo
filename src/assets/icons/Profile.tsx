import React from "react";
import { Svg, Path } from "react-native-svg";
import { IconBaseProps } from "../../components/Icon";
import { useTheme } from "styled-components";

export const Profile = ({ size = 20, color = "Icon" }: IconBaseProps) => {
  const { colors } = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 14 18" fill="none">
      <Path
        d="M1.16668 15.6667H12.8333V17.3333H1.16668V15.6667ZM7.00001 14C5.2319 14 3.53621 13.2976 2.28596 12.0474C1.03572 10.7971 0.333344 9.10143 0.333344 7.33332C0.333344 5.56521 1.03572 3.86952 2.28596 2.61928C3.53621 1.36904 5.2319 0.666656 7.00001 0.666656C8.76812 0.666656 10.4638 1.36904 11.7141 2.61928C12.9643 3.86952 13.6667 5.56521 13.6667 7.33332C13.6667 9.10143 12.9643 10.7971 11.7141 12.0474C10.4638 13.2976 8.76812 14 7.00001 14Z"
        fill={colors[color]}
      />
    </Svg>
  );
};
