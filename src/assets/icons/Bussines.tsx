import React from "react";
import { SvgCss } from "react-native-svg";
import { IconBaseProps } from "../../components/Icon";
import { useTheme } from "styled-components";

const Bussines = `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="20" height="20" fill="url(#pattern0)"/>
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_1_307" transform="scale(0.0111111)"/>
      </pattern>
      <image id="image0_1_307" width="90" height="90" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACWUlEQVR4nO2cwW7TQBCGfQL6BlCQeCQeBGhvlJfwIRDJ80eWcs+DFHoivAY3VC49LVrJoCoKKLu1d+zu90lzSVVn+nkyO9Zu2jQAAAAAAACQxna7fSbpUtKNmf2SFI7F8LOvki5Wq9XTxLepm81m88rMvv9L7n9iH3/XO//FVLLlSf4rm8o+gaFd5Er+007en/JeVSPpZgTRX7z/jtkj6fahouM1mse6+tcWNua084DVv7bYZ087I6z+tcU+q7LHWP1rC8uZdsZY/WsLy5l2Rlr9a4vbHNHeSYclBqKF6OBdhVS0/MXROuQvlR4tRAfviqOi5S+J1iF/gfRozSt4YBGig3cVUtHyF0frkL9UerQQHbwrjoqWvyRah/wFzqZHm9mdpA9935/HMLOr4bWwhBgr/xKirw6vEV/zFqjC+Zd4MnxxeI31ev3cW6AK5z+56BFvWPCIqT0gWogOVPSRj0xcqQ8/Hl3XvfRuCSqc/+St49iqLemjt0AVzr+E6LuY7JLnaBsh/xzRnL1T8g37mSOa06Qqc5r0wvvjrOXFu2TR8fR6PMU+g+TDEsLMvu12uydNDvF7GcjWSZLjKJgl+X5lx68MxP7DAqn7guOwcB3bRXYlAwDAvDGzt/w7huRxOH2OHsaWH5I+dV33pu/7123bniVf6JHStu1ZdBLdmNnnwRWHHFXowSX5jnk/aWmhgWghOnhXIRUtf3G0DvlLpUcL0cG74qho1ds62JxVsmg2Z1WgmtmcVbHWweaspq9mNmdVQDKbs5pMMJuzAAAAAAAAAAAAAM3J/AYJPPf603uZ6QAAAABJRU5ErkJggg=="/>
    </defs>
  </svg>
`;

export default () => <SvgCss xml={Bussines} width="25px" height="25px" />;
