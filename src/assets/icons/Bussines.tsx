import React from "react";
import { Svg, Path, Pattern, Defs, Rect, Use, Image } from "react-native-svg";
import { IconBaseProps } from "../../components/Icon";
import { useTheme } from "styled-components";

export const Bussines = ({ size = 20, color = "Icon" }: IconBaseProps) => {
  const { colors } = useTheme();
  return (
    // <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
    //   <Path
    //     d="M14.0258 12.8475L17.595 16.4158L16.4158 17.595L12.8475 14.0258C11.5198 15.0902 9.86832 15.6691 8.16666 15.6667C4.02666 15.6667 0.666656 12.3067 0.666656 8.16666C0.666656 4.02666 4.02666 0.666656 8.16666 0.666656C12.3067 0.666656 15.6667 4.02666 15.6667 8.16666C15.6691 9.86832 15.0902 11.5198 14.0258 12.8475ZM12.3542 12.2292C13.4118 11.1416 14.0024 9.68368 14 8.16666C14 4.94332 11.3892 2.33332 8.16666 2.33332C4.94332 2.33332 2.33332 4.94332 2.33332 8.16666C2.33332 11.3892 4.94332 14 8.16666 14C9.68368 14.0024 11.1416 13.4118 12.2292 12.3542L12.3542 12.2292Z"
    //     fill={colors[color]}
    //   />
    // </Svg>
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Rect width={size} height={size} fill="url(#pattern0)" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          {/* <Use xlink:href="#image0_1_314" transform="scale(0.0111111)" /> */}
        </Pattern>
        <Image
          id="image0_1_314"
          width="90"
          height="90"
          // xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACWUlEQVR4nO2cwW7TQBCGfQL6BlCQeCQeBGhvlJfwIRDJ80eWcs+DFHoivAY3VC49LVrJoCoKKLu1d+zu90lzSVVn+nkyO9Zu2jQAAAAAAACQxna7fSbpUtKNmf2SFI7F8LOvki5Wq9XTxLepm81m88rMvv9L7n9iH3/XO//FVLLlSf4rm8o+gaFd5Er+007en/JeVSPpZgTRX7z/jtkj6fahouM1mse6+tcWNua084DVv7bYZ087I6z+tcU+q7LHWP1rC8uZdsZY/WsLy5l2Rlr9a4vbHNHeSYclBqKF6OBdhVS0/MXROuQvlR4tRAfviqOi5S+J1iF/gfRozSt4YBGig3cVUtHyF0frkL9UerQQHbwrjoqWvyRah/wFzqZHm9mdpA9935/HMLOr4bWwhBgr/xKirw6vEV/zFqjC+Zd4MnxxeI31ev3cW6AK5z+56BFvWPCIqT0gWogOVPSRj0xcqQ8/Hl3XvfRuCSqc/+St49iqLemjt0AVzr+E6LuY7JLnaBsh/xzRnL1T8g37mSOa06Qqc5r0wvvjrOXFu2TR8fR6PMU+g+TDEsLMvu12uydNDvF7GcjWSZLjKJgl+X5lx68MxP7DAqn7guOwcB3bRXYlAwDAvDGzt/w7huRxOH2OHsaWH5I+dV33pu/7123bniVf6JHStu1ZdBLdmNnnwRWHHFXowSX5jnk/aWmhgWghOnhXIRUtf3G0DvlLpUcL0cG74qho1ds62JxVsmg2Z1WgmtmcVbHWweaspq9mNmdVQDKbs5pMMJuzAAAAAAAAAAAAAM3J/AYJPPf603uZ6QAAAABJRU5ErkJggg=="
        />
      </Defs>
    </Svg>
  );
};
