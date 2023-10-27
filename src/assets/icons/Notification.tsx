import React from "react";
import { Svg, Path, G, Defs, Rect, ClipPath } from "react-native-svg";
import { IconBaseProps } from "../../components/Icon";
import { useTheme } from "styled-components";

export const NotificationFill = ({
  size = 20,
  color = "Icon",
}: IconBaseProps) => {
  const { colors } = useTheme();
  return (
    <Svg width={size} height={size} viewBox="0 0 18 19" fill="none">
      <Path
        d="M17.3333 15.6667H0.666664V14H1.5V8.19251C1.5 4.03584 4.85833 0.666672 9 0.666672C13.1417 0.666672 16.5 4.03584 16.5 8.19251V14H17.3333V15.6667ZM6.91666 16.5H11.0833C11.0833 17.0525 10.8638 17.5824 10.4731 17.9731C10.0824 18.3638 9.55253 18.5833 9 18.5833C8.44746 18.5833 7.91756 18.3638 7.52686 17.9731C7.13616 17.5824 6.91666 17.0525 6.91666 16.5Z"
        fill={colors[color]}
      />
    </Svg>
  );
};
