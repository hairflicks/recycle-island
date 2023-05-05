import React, { useState } from "react";
import { Text, TouchableOpacity, Animated, Image } from "react-native";
import { styles } from "./StyleSheetCSS";

const FlippableCard = ({ currentUser, model }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const rotateY = useState(new Animated.Value(0))[0];

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    Animated.timing(rotateY, {
      toValue: isFlipped ? 0 : 1,
      duration: 350,
      useNativeDriver: true,
    }).start();
  };

  const frontInterpolate = rotateY.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const backInterpolate = rotateY.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "360deg"],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <TouchableOpacity onPress={flipCard}>
      <Animated.View style={[styles.card, styles.front, frontAnimatedStyle]}>
        <Text style={styles.shopItem}>{model.itemDisplayName}</Text>
        <Image
          style={styles.shopItemImage}
          source={require(`../assets/Chicken/Chicken.png`)}
        />
      </Animated.View>
      <Animated.View style={[styles.card, styles.back, backAnimatedStyle]}>
        <Text style={styles.text}>Goodbye</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default FlippableCard;
