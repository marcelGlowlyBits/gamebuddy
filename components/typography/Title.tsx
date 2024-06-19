import { PropsWithChildren } from "react";
import { Text as PrimitiveText, TextStyle, StyleSheet } from "react-native";

import { Colors, TextColors } from "@/constants/Colors";

export const Title = ({
  children,
  align = "left",
  style,
  color = "black",
  size = 34,
  bold = false,
  numberOfLines,
  ellipsizeMode,
}: {
  children: PropsWithChildren<any>;
  align?: "center" | "left" | "right";
  style?: TextStyle;
  color?: TextColors;
  size?: number;
  bold?: boolean;
  numberOfLines?: number;
  ellipsizeMode?: "head" | "middle" | "tail" | "clip";
}) => {
  const styles = useStyles({
    align,
    color,
    size,
    bold,
  });

  return (
    <PrimitiveText
      style={[styles.title, style]}
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
  size: number;
  bold: boolean;
}) =>
  StyleSheet.create({
    title: {
      fontFamily: bold ? "Poppins_600SemiBold" : "Poppins_400Regular",
      ...(align && { textAlign: align }),
      fontSize: size,
      color: Colors.text[color],
    },
  });
