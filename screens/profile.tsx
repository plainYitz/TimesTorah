import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { config } from '../config'

type User = {
    firstName: string
    lastName: string
    title: string
    profileImage?: string
    profileBackground?: string
    bio: string
    followers: []
    following: []
    learningPartners: []
}
const testUser: User = {
    firstName: 'Isaac',
    lastName: 'Sabel',
    title: "Learner",
    bio: 'I Only want to learn more.',
    followers: [],
    following: [],
    learningPartners: [],
}  

export default function Profile() {

  return (
    <>
    <View style={{backgroundColor: "white", flexGrow: 1}} >
        <View style={{ position: "absolute", backgroundColor: "black", height: 110, top: 0, left: 0, width: Number.MAX_SAFE_INTEGER }} >
            
        </View>
        
        <Text style={styles.bio} >{testUser.bio}</Text>
        <View style={{flexDirection: 'row', gap: 8}} >
            <View style={{...styles.profileAvatar, backgroundColor: "#" + ([testUser.firstName.charCodeAt(0), testUser.lastName.charCodeAt(0), parseInt((255/2)+"")].map(n => n.toString(16)).join("")) }} ></View>
            <View style={{justifyContent: "center", gap: 5}} >
                <Text style={styles.name}>{testUser.firstName} {testUser.lastName}</Text>
                <Text style={styles.title}>{testUser.title}</Text>
            </View>
        </View>

    </View>
    <View>
      <Text></Text>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    bio: {
        textAlign: "right",
        fontStyle: 'italic',
        fontWeight: "bold",
        color: config.theme.foreground,
        padding: 10,
        margin: 10,
        textShadowColor: "#777",
        textShadowOffset:{ height: 3, width: 3 },
        textShadowRadius: 6,
    },
    profileAvatar: {
        borderRadius: 200,
        width: 85,
        height: 85,
        borderColor: "white",
        borderWidth: 2,
        backgroundColor: config.theme.background,
        marginLeft: 10,
        overflow: 'hidden',
        shadowColor: "#000",
        elevation: 20
    },
    name: {
        fontSize: 15,
        fontWeight: "400",
        color: config.theme.foreground,
    },
    title: {
        fontSize: 15,
        fontWeight: "900",
        color: config.theme.background,
    }
})