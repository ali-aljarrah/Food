import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imgStyle} source={{ uri: result.image_url }} />
      <Text style={styles.textStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imgStyle: {
    width: 250,
    height: 200,
    borderRadius: 4,
    marginBottom: 5,
  },
  textStyle: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;
