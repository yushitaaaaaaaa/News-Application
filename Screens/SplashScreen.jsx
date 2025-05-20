import React, { useEffect } from 'react';
import { Text } from 'react-native';
import LottieView from "lottie-react-native";
import { View, StyleSheet, StatusBar } from "react-native";

export const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Home");
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar 
                barStyle="light-content" 
                backgroundColor="#1e88e5"
            />
            
            <LottieView
                style={styles.splashCard}
                source={require('../assets/Animation - 1747722059589.json')}
                autoPlay
                loop
            />

            <Text style={styles.title}>News Application</Text>
            <Text style={styles.subtitle}>Stay informed, anywhere in the world!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1e88e5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    splashCard: {
        width: 300,
        height: 300
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: '#ffffff',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.8)',
        textAlign: 'center',
    }
});