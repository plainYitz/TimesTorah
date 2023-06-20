import { View, StyleSheet, Text, Pressable } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { NativeStackHeaderProps } from "@react-navigation/native-stack"
import { config } from "../config"

export default function Home({ navigation }: NativeStackHeaderProps) {

  const insets = useSafeAreaInsets()

  return (
    <>
      <View style={{ backgroundColor: "#fff4", padding: 10 }}>
        <Text style={{ color: "white", fontWeight: "900" }}>
          Times Torah
        </Text>
      </View>
      <View style={{ backgroundColor: "black", flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.text}>hello world</Text>
      </View>
      <View style={{ padding: 10, backgroundColor: "black",  }}>
        <Text style={styles.text}>
          hello all
        </Text>
      </View>
      <Pressable style={{...styles.buttonStyle}} accessibilityRole="tab" accessibilityLabel="navigate to profile page" onPress={() => navigation.navigate("Profile")} >
        <Text style={styles.buttonText} >ola</Text>
      </Pressable>
    </>)
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  buttonStyle: {
    borderRadius: Number.MAX_SAFE_INTEGER,
    backgroundColor: config.theme.semi,
    padding: 10,
    alignItems: "center",
    margin: 5,
    elevation: 1
  },
  buttonText: {
    color: config.theme.brown,
    fontWeight: "600",
    textTransform: "capitalize",
    fontSize: 18,
 
  }
})