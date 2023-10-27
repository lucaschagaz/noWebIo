import { Text as RNText, TextProps, TextStyle, ViewStyle } from "react-native";
import React from "react";
import { IProps } from "../Box/Box";
import { ThemeColor } from "../../Styles/Theme/theme";
import { useTheme } from "styled-components";

interface ITextProps extends TextProps {
  bold?: boolean;
  variant?: textFonts;
  color?: keyof ThemeColor;
  children: React.ReactNode;
}

export const Text = ({
  variant = "Paragraph",
  style,
  color = "BackgroundContrasct",
  bold,
  children,
  ...rest
}: ITextProps) => {
  const { colors } = useTheme();
  return (
    <RNText
      style={[
        $FontVarients[variant],
        { color: colors[color], fontWeight: bold ? "bold" : "normal" },
        style,
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
};

type textFonts =
  | "headingOne"
  | "headingTwo"
  | "headingThree"
  | "Paragraph"
  | "ParagraphTwo"
  | "subTitleOne"
  | "subTileTwo"
  | "subTitle";

const $FontVarients: Record<textFonts, TextStyle> = {
  headingOne: { fontSize: 28, lineHeight: 38 },
  headingTwo: { fontSize: 18, lineHeight: 24 },
  headingThree: { fontSize: 17, lineHeight: 38 },
  Paragraph: { fontSize: 15, lineHeight: 38 },
  ParagraphTwo: { fontSize: 15, lineHeight: 22 },
  subTitleOne: { fontSize: 13, lineHeight: 24 },
  subTileTwo: { fontSize: 11, lineHeight: 24 },
  subTitle: { fontSize: 10, lineHeight: 10 },
};
