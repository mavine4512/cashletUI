import React from "react";
import * as Animatable from "react-native-animatable";
import AntDesign from "react-native-vector-icons/AntDesign";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./styles.js";
import Card from "../../components/card.js";
import SnackDialog from "../../components/snackDialog.js";
const data = [
  {
    id: 1,
    name: "Goal 1",
    amout: "12,000",
    status: "finish goal",
  },
  {
    id: 2,
    name: "Goal 2",
    amout: "12,000",
    status: "finish goal",
  },
  {
    id: 4,
    name: "Goal 2",
    amout: "12,000",
    status: "finish goal",
  },
  {
    id: 5,
    name: "Goal 2",
    amout: "12,000",
    status: "finish goal",
  },
];

class Dashboard extends React.Component {
  time = () => {
    let today = new Date();
    let curHr = today.getHours();

    if (curHr < 12) {
      return "Good Morning";
    } else if (curHr < 18) {
      return "Afternoon";
    } else {
      return "Good Evening";
    }
  };

  renderItem = (item) => {
    return (
      <TouchableOpacity>
        <Card>
          <View style={styles.firstItemChild}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemAmount}>kes {item.amout}</Text>
          </View>
          <View style={styles.secondItemChild}>
            <View style={styles.statusCard}>
              <Text style={styles.status}>{item.status}</Text>
            </View>
            <View style={styles.divider} />
            <AntDesign
              size={15}
              style={styles.icon}
              name={"right"}
              type={"AntDesign"}
            />
          </View>
        </Card>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={styles.parentContainer}>
        <SnackDialog
          ref={(ref) => {
            this.snackModal = ref;
          }}
        />
        <View style={styles.childContainer}>
          <Text style={styles.timeName}>
            {this.time()} <Text style={styles.nameJo}>Mavine</Text>
          </Text>
          <Text style={styles.info}>{"Here's the latest"}</Text>
          <View style={styles.numbersContainer}>
            <Text style={styles.kes}>kes 42,000</Text>
            <Text style={styles.info}>Total funds</Text>
          </View>
        </View>
        <Animatable.View
          animation="slideInUp"
          useNativeDriver
          easing={"ease-in-out-cubic"}
          style={styles.content}
        >
          <View style={styles.dataContainer}>
            <Text style={styles.title}>Your goals</Text>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => this.renderItem(item)}
            />
            <TouchableOpacity
              onPress={() => {
                this.snackModal.show();
              }}
              style={styles.snackbarContainer}
            >
              <Text style={styles.snackbarText}>Show Snackbar</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }
}

export default Dashboard;
