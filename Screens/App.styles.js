import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5'
    },
    title: {
        fontSize: 24,
        marginBottom: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: "#fff",
        backgroundColor: "#1e88e5",
        padding: 12,
        marginTop: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    countrySelector: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 15,
        marginTop: 5,
        
    }
})