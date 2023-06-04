import React from "react";
import { Modal, View, StyleSheet, Text, SafeAreaView } from "react-native";
import { moderateScale } from "react-native-size-matters";
import * as Animatable from "react-native-animatable";
import AntDesign from "react-native-vector-icons/AntDesign";
import { grey_light, primary, white } from "../untilities/colors";

export default class UserClicked extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }
  showClickUserModal = () => {
    this.setState({ isVisible: true });
  };
  close = () => {
    this.setState({ isVisible: false });
  };

  render() {
    return (
      <Modal isVisible={this.state.isVisible} transparent>
        <SafeAreaView style={{ flex: 1 }}>
          <Animatable.View
            animation={"fadeInLeft"}
            duration={500}
            style={styles.userClickcontainer}
          >
            <View>
              <Text>User clicked snackbar</Text>
            </View>
          </Animatable.View>
        </SafeAreaView>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: moderateScale(104),
    backgroundColor: "rgba(0,0,0,.1)",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E81780",
    height: moderateScale(80),
    marginLeft: moderateScale(10),
    marginRight: moderateScale(10),
    marginTop: moderateScale(20),
    borderTopRightRadius: moderateScale(9),
    borderTopLeftRadius: moderateScale(9),
    borderBottomLeftRadius: moderateScale(9),
    borderBottomRightRadius: moderateScale(9),
  },
  textContainer: {
    marginLeft: moderateScale(15),
    width: moderateScale(270),
  },
  actionText: {
    color: white,
    fontFamily: "Gotham SSm Light",
    fontSize: moderateScale(14),
  },
  containerIcon: {
    marginRight: moderateScale(10),
  },
  icon: {
    color: white,
  },
  userClickcontainer: {
    height: moderateScale(90),
    backgroundColor: "rgba(0,0,0,.5)",
  },
});
