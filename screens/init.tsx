import { View, Text, StyleSheet, Image } from 'react-native'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

export default function Init({ navigation }: NativeStackHeaderProps) {

//   setTimeout(() => {
//     navigation.replace("Home")
//   }, 5000 )

  return (
    <View style={styles.background} >
      <Image style={styles.image} source={require("../assets/c924d665-26d9-45c5-b765-11c7a36bd735.png")} ></Image>
      <Text style={styles.text}>Init</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    background: {
        flexGrow: 1,
        backgroundColor: "#f79",
        opacity: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        resizeMode: "cover",
        aspectRatio: 1,
        width: 200,
        height: 200,
        borderRadius: 100,
        opacity: 1,
        backgroundColor: "black",
        
    },
    text: {
        color: "white"
    }
})