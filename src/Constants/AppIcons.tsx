import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import DefaultTheme from "./DefaultTheme";

export const BackIcon = ({
  color = DefaultTheme.colors.iconDefault,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <AntDesign name="arrowleft" size={size} color={color} />;
export const RightAngularIcon = ({
  color = DefaultTheme.colors.iconDefault,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <AntDesign name="right" size={size} color={color} />;
export const EditIcon = ({
  color = DefaultTheme.colors.iconDefault,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <AntDesign name="edit" size={size} color={color} />;
export const LocationIcon = ({
  color = DefaultTheme.colors.iconDefault,
  size = 20,
}: {
  color?: string;
  size?: number;
}) => <EvilIcons name="location" size={size} color={color} />;
