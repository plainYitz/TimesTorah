import { View, Text, StyleSheet, Pressable } from "react-native"
import { config } from "../config"

export default function LoginScreen() {

    function loginWithGoogle() {}
    function loginWithEmail() {}

    return (
        <View style={styles.page} >
            <Text style={styles.header} >Log in</Text>
            <Text style={styles.text} >continue with</Text>
            <Pressable accessibilityRole="button" onPress={loginWithGoogle} >
                <Text style={styles.text} >Google</Text>
            </Pressable>
            <Pressable accessibilityRole="button" onPress={loginWithEmail} >
                <Text style={styles.text} >Email</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: config.theme.background,
        alignItems: "center",
        justifyContent: "center",
        gap: 15,
        flexGrow: 1,
        borderStyle: "solid",
        borderBottomColor: "red",
        borderBottomWidth: 7
    },
    header: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    text: {
        color: "white",
        fontSize: 14,
    },
    clickButton: {
        backgroundColor: config.theme.semi,
        borderRadius: Number.MAX_SAFE_INTEGER,
    }
})