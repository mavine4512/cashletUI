import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen");
import { moderateScale } from "react-native-size-matters";
import {
  primary,
  green,
  white,
  scondary,
  grey_light,
} from "../../untilities/colors";

export default StyleSheet.create({
  parentContainer: {
    height: height,
    backgroundColor: primary,
  },
  childContainer: {
    marginTop: moderateScale(20),
    marginLeft: moderateScale(30),
  },
  timeName: {
    color: white,
    fontSize: moderateScale(25),
    fontWeight: "100",
    fontFamily: "Roboto-MediumItalic",
  },
  nameJo: {
    color: white,
    fontSize: moderateScale(26),
    fontWeight: "600",
  },
  info: {
    color: white,
    fontSize: moderateScale(12),
    fontWeight: "100",
    fontFamily: "Roboto-Regular",
  },
  numbersContainer: {
    marginTop: moderateScale(14),
  },
  kes: {
    color: green,
    fontSize: moderateScale(26),
    fontWeight: "100",
    fontFamily: "Roboto-Regular",
    textTransform: "uppercase",
  },
  content: {
    hieght: moderateScale(560),
    borderTopLeftRadius: moderateScale(15),
    borderTopRightRadius: moderateScale(15),
    overflow: "hidden",
    backgroundColor: scondary,
    marginTop: moderateScale(15),
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(20),
  },
  title: {
    color: primary,
    fontSize: moderateScale(16),
    fontWeight: "100",
    textTransform: "capitalize",
    paddingLeft: moderateScale(10),
  },
  dataContainer: {
    height: moderateScale(450),
    marginHorizontal: moderateScale(10),
  },
  itemName: {
    color: primary,
    fontSize: moderateScale(14),
    fontWeight: "100",
    textTransform: "capitalize",
  },
  itemAmount: {
    color: "#76777A",
    fontSize: moderateScale(10),
    fontWeight: "100",
    fontFamily: "Roboto-Regular",
    textTransform: "uppercase",
  },
  firstItemChild: {
    marginBottom: moderateScale(15),
  },
  divider: {
    height: moderateScale(65),
    backgroundColor: "#E7E8EE",
    width: moderateScale(0.9),
  },
  secondItemChild: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: moderateScale(95),
    height: moderateScale(65),
  },
  statusCard: {
    backgroundColor: green,
    borderRadius: 5,
    padding: moderateScale(5),
  },
  status: {
    color: white,
    fontSize: moderateScale(10),
    fontWeight: "100",
    fontFamily: "Roboto-Regular",
    textTransform: "capitalize",
  },
  icon: {
    color: primary,
  },
  snackbarContainer: {
    margingHorizontal: moderateScale(20),
    marginBottom: moderateScale(20),
    backgroundColor: green,
    height: moderateScale(45),
    borderRadius: moderateScale(20),
    alignItems: "center",
    justifyContent: "center",
  },
  snackbarText: {
    color: white,
    fontSize: moderateScale(14),
    fontWeight: "100",
    fontFamily: "Roboto-Regular",
    textTransform: "capitalize",
  },
});
