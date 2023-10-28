import React from "react";
import { ThemeColor } from "../../Styles/Theme/theme";

import { Lupa } from "../../assets/icons/Lupa";
import Bussines from "../../assets/icons/Bussines";
import { Profile } from "../../assets/icons/Profile";
import { Scan } from "../../assets/icons/Scan";
import { Voice } from "../../assets/icons/Voice";
import { NotificationFill } from "../../assets/icons/Notification";
import { Plus } from "../../assets/icons/Plus";
import { Message } from "../../assets/icons/Message";
import { Ligth } from "../../assets/icons/Ligth";
import { Calendar } from "../../assets/icons/Calendar";
import { LeftSeta } from "../../assets/icons/LeftSeta";
import Exclamation from "../../assets/icons/Exclamation";
import { ChevronRigth } from "../../assets/icons/ChevronRigth";
import { Home } from "../../assets/icons/Home";
import { Men } from "../../assets/icons/Men";
import { Box } from "../Box/Box";
import { useTheme } from "styled-components";
import { Down } from "../../assets/icons/Down";
import { EyeOn } from "../../assets/icons/EyeOn";
import Logo from "../../assets/icons/Logo";

export interface IconBaseProps {
  size?: number;
  color?: keyof ThemeColor;
}

export interface IIconProps extends IconBaseProps {
  name: IconsName;
  tab?: boolean;
}

export const Icon = ({ name, size, color, tab = false }: IIconProps) => {
  const SVGIcon = iconsRegistry[name];
  const { colors } = useTheme();
  return tab ? (
    <Box
      style={{
        backgroundColor: colors["Primary_opacity"],
        padding: 15,
        borderRadius: "50%",
      }}
    >
      <SVGIcon color={color} size={size} />
    </Box>
  ) : (
    <SVGIcon color={color} size={size} />
  );
};

const iconsRegistry = {
  bussines: Bussines,
  exclamation: Exclamation,
  lupa: Lupa,
  profile: Profile,
  scan: Scan,
  notificationFill: NotificationFill,
  voice: Voice,
  plus: Plus,
  message: Message,
  ligth: Ligth,
  calendar: Calendar,
  leftSet: LeftSeta,
  chevronRigth: ChevronRigth,
  home: Home,
  men: Men,
  down: Down,
  eye: EyeOn,
  logo: Logo,
};

type IconsName = keyof typeof iconsRegistry;
