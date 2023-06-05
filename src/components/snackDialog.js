import React from "react";
import {
  Modal,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import * as Animatable from "react-native-animatable";
import AntDesign from "react-native-vector-icons/AntDesign";
import { white } from "../untilities/colors";

let timeout;

export default class SnackDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      isInitialText: true,
    };
  }

  componentWillUnmount() {
    clearInterval(timeout); // Clear the interval on component unmount
  }
  handleTimeout() {
    let _this = this;

    timeout = setTimeout(function () {
      _this.setState({ visible: false });
    }, 5000);
  }

  show() {
    clearTimeout(timeout);
    this.setState({ visible: true, isInitialText: true }, () => {
      this.handleTimeout();
    });
  }

  handleBannerTouch = () => {
    clearTimeout(timeout);
    this.setState({ isInitialText: false }, () => {
      this.handleTimeout();
    });
  };

  render() {
    return (
      <Modal visible={this.state.visible} transparent>
        <TouchableWithoutFeedback onPressIn={this.handleBannerTouch}>
          <Animatable.View
            animation={"fadeInLeft"}
            duration={500}
            style={styles.container}
          >
            <View style={styles.infoContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.actionText}>
                  {this.state.isInitialText
                    ? "This is an in-app notification snackbar to show to the user when they perform an action. clicking it should change the text"
                    : "User clicked snackbar"}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => this.setState({ visible: false })}
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
        </TouchableWithoutFeedback>
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
