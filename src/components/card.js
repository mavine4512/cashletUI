import React from "react";
import { StyleSheet, View } from "react-native";
import { white } from "../untilities/colors";
import { moderateScale } from "react-native-size-matters";

export default function Card(props) {
  return (
    <View style={[styles.card, { ...props.style }]}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: white,
    height: moderateScale(65),
    paddingHorizontal: moderateScale(9),
    borderRadius: moderateScale(10),
    marginVertical: moderateScale(5),
    elevation: 2,
    shadowColor: "#EBECEE",
    shadowRadius: 2,
    shadowOpacity: 1,
    overflow: "hidden",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
