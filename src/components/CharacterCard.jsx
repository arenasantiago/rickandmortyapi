import React from 'react';
import styles from '../styles/characterStyles';
import { Image, Text, View } from 'react-native-web';

export default function CharacterCard ( { character }) {
    return(
        <View style = {styles.card}>
            <Image source = {{uri: character.image}} style={styles.image} />
            <Text style={styles.name}> {character.name}</Text>
            <Text style={styles.info}> {character.status}</Text>
            <Text style={styles.vive} >{character.location.name}</Text>
        </View>
    )
}