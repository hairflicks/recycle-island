import { View } from "react-native";
import React, { useEffect, useState } from "react";
import FlippableCard from "./FlippableCard";
import { styles } from "./StyleSheetCSS";
import { StyleSheet, Text, TouchableOpacity, Animated } from "react-native";

import BottomNavigation from "./BottomNavigation";

import * as api from "../api";

function Shop({ navigation }) {
  const [model, setModel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.fetchAllItems();
        setModel(data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const bearImage = require("../assets/BearCub/BearCub.png");

  return (
    <View style={styles.container}>
      {model.map((item: object) => {
        return (
          <View style={styles.shopItem}>
            <FlippableCard frontText="Hello" backText="Goodbye" />
          </View>
        );
      })}
      {/* <div style={styles.shopItem}> */}
      {/* <img src={bearImage} style={styles.shopItemImage}></img>
        <p style={styles.shopItemDescription}>{"nothing"}</p>
        <p style={styles.shopItemBuy}>buy</p> */}
      {/* </div> */}

      <BottomNavigation navigation={navigation} />
    </View>
  );
}

export default Shop;
