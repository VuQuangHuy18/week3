import { StyleSheet, Text, View, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { deg } from "react-native-linear-gradient-degree";

export default function App() {
  return (
    <LinearGradient
      colors={["rgba(230,255,255)", "#28F7AC"]}
      style={styles.linearGradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      {...deg(180)}
    >
      <View style={styles.circle}></View>
      <View>
        <Text style={styles.growYourBusiness}>GROW YOUR BUSINESS</Text>
      </View>
      <View>
        <Text style={styles.onlineServer}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View style={styles.login}>
        <Button title="LOGIN" color="#E3C000"></Button>
      </View>
      <View style={styles.signUp}>
        <Button title="SIGN UP" color="#E3C000"></Button>
      </View>
      <Text style={styles.howWeWork}>HOW WE WORK?</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  circle: {
    position: "absolute",
    width: 142,
    height: 142,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 15,
    justifyContent: "center",
    left: 109,
    top: 69,
  },
  growYourBusiness: {
    position: "absolute",
    width: 189,
    height: 58,
    left: 86,
    top: 277,
    fontFamily: "",
    fontStyle: "normal",
    fontWeight:"700",
    fontSize:25,
    lineHeight: 29,
    textAlign: "center",
    colors: "#000000",
  },
  onlineServer: {
    position: "absolute",
    width: 302,
    height: 36,
    left: 30,
    top: 385,
    fontStyle: "normal",
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 18,
    textAlign: "center",
    color: "#000000",
  },
  login: {
    position: "absolute",
    width: 125,
    height: 45,
    left: 30,
    top: 471,
  },
  // textButton: {
  //   fontStyle: "normal",
  //   fontWeight: 700,
  //   fontSize: 15,
  //   lineHeight: 18,
  //   textAlign: "center",
  //   color: "#000000",
  // },
  signUp: {
    position: "absolute",
    width: 125,
    height: 45,
    left: 209,
    top: 471,
  },
  howWeWork: {
    position: "absolute",
    width: 302,
    height: 53,
    left: 30,
    top: 537,
    fontStyle: "normal",
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 18,
    textAlign: "center",
    color: "#000000",
  },
});
