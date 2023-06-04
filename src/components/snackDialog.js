import React from "react";
import {
  Modal,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import * as Animatable from "react-native-animatable";
import AntDesign from "react-native-vector-icons/AntDesign";
import { grey_light, primary, white } from "../untilities/colors";
import UserClicked from "./userClicked";

export default class SnackDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      isVisible: false,
    };
  }
  showModal = () => {
    this.setState({ visible: true });
  };
  close = () => {
    this.setState({ visible: false });
  };

  redirect = () => {
    this.close();
    this.clickedModal.showClickUserModal();
  };

  render() {
    return (
      <Modal visible={this.state.visible} transparent>
        <UserClicked
          ref={(ref) => {
            this.clickedModal = ref;
          }}
        />
        <SafeAreaView style={{ flex: 1 }}>
          <Animatable.View
            animation={"fadeInLeft"}
            duration={500}
            style={styles.container}
          >
            <View style={styles.infoContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.actionText}>
                  This ia an in-app notification snackbar to show to the user
                  whenthey perform action.
                  <Text onPress={() => this.redirect()}>
                    Click it should change the text.
                  </Text>
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => this.close()}
                style={styles.containerIcon}
              >
                <AntDesign
                  size={25}
                  style={styles.icon}
                  name={"close"}
                  type={"AntDesign"}
                />
              </TouchableOpacity>
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
