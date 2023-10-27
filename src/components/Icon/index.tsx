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
import { Men } from "../../assets/icons/Men";

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
};

type IconsName = keyof typeof iconsRegistry;
