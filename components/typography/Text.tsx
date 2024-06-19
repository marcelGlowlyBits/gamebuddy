import { PropsWithChildren } from "react";
import { Text as PrimitiveText, StyleSheet, TextStyle } from "react-native";

import { Colors, TextColors } from "@/constants/Colors";

export const Text = ({
  children,
  align = "left",
  size = 16,
  style,
  color = "black",
  numberOfLines,
  ellipsizeMode,
  bold = false,
}: {
  children: PropsWithChildren<string>;
  align?: "center" | "left" | "right";
  size?: 12 | 14 | 16 | 20 | 22;
  style?: TextStyle;
  color?: TextColors;
  numberOfLines?: number;
  ellipsizeMode?: "head" | "middle" | "tail" | "clip";
  bold?: boolean;
}) => {
  const styles = useStyles({
    align,
    size,
    color,
    bold,
  });

  return (
    <PrimitiveText
      style={[styles.text, style]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {children}
    </PrimitiveText>
  );
};

const useStyles = ({
  color,
  align,
  size,
  bold,
}: {
  color: TextColors;
  align: "center" | "left" | "right";
  size: 12 | 14 | 16 | 20 | 22;
  bold: boolean;
}) =>
  StyleSheet.create({
    text: {
      fontFamily: bold ? "Poppins_600SemiBold" : "Poppins_400Regular",
      ...(align && { textAlign: align }),
      fontSize: size ? size : 16,
      color: Colors.text[color],
      lineHeight: 24,
    },
  });
