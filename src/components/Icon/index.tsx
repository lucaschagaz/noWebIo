import React from "react";
import { ThemeColor } from "../../Styles/Theme/theme";

import { Lupa } from "../../assets/icons/Lupa";
import { Bussines } from "../../assets/icons/Bussines";
import { Profile } from "../../assets/icons/Profile";
import { Scan } from "../../assets/icons/Scan";
import { Voice } from "../../assets/icons/Voice";
import { NotificationFill } from "../../assets/icons/Notification";
import { Plus } from "../../assets/icons/Plus";
import { Message } from "../../assets/icons/Message";
import { Ligth } from "../../assets/icons/Ligth";
import { Calendar } from "../../assets/icons/Calendar";
import { LeftSeta } from "../../assets/icons/LeftSeta";
import { Exclamation } from "../../assets/icons/Exclamation";
import { ChevronRigth } from "../../assets/icons/ChevronRigth";
import { Home } from "../../assets/icons/Home";

export interface IconBaseProps {
  size?: number;
  color?: keyof ThemeColor;
}

interface IIconProps extends IconBaseProps {
  name: IconsName;
}

export const Icon = ({ name, size, color }: IIconProps) => {
  const SVGIcon = iconsRegistry[name];
  return <SVGIcon color={color} size={size} />;
};

const iconsRegistry = {
  bussines: Bussines,
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
  exclamation: Exclamation,
  chevronRigth: ChevronRigth,
  home: Home,
};

type IconsType = typeof iconsRegistry;

type IconsName = keyof IconsType;
