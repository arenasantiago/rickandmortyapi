import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        width: 150,
        padding: 15
    },
    image: {
        width: 150,
        height: 120,
        borderRadius: 60,
        marginBottom: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5
    }
    ,
    info: {
        color: '#555'
    },
    characterList:{
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 15
    },
    vive: {
        fontSize: 18,
        marginBottom: 5
    }
})

export default styles;