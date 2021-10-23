import React from "react"

import { StyleSheet, View, Text } from "react-native"


export default props => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 10,
        marginHorizontal: 10
    },
    text: {
        color: "#000",
        fontWeight: "900",
        fontSize: 24
    }
})