import { Text, View, StyleSheet, Image } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import newsImage from "../../assets/news-image.jpeg";

export const Card: React.FC = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={newsImage} />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Dummy title</Text>
        <MaterialIcons name="favorite-border" color="#72bcd4" size={24} />
      </View>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.description}>This is a dummy description</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    height: 300,
    margin: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  imageWrapper: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  titleWrapper: {
    height: "10%",
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  descriptionWrapper: {
    paddingHorizontal: 15,
    marginTop: 10,
  },
  title: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 20,
  },
  description: {
    fontFamily: "Ubuntu-Regular",
    fontSize: 15,
  },
});
