import React, {useState, useEffect, use} from "react";
import { View, Text, Button, ActivityIndicator, ScrollView } from "react-native-web";
import { fetchCharacters } from "../api/apiRickAndMorti";
import CharacterList from "../components/CharacterList";
import styles from "../styles/characterStyles";


export default function HomeScreen() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);

    const loadCharacters = async (pageToLoad = 1) => {
        setLoading(true);
        try {
            const data = await fetchCharacters(pageToLoad);
            setCharacters(data.results);
            setTotalPages(data.info.page)
        } catch (error) {
            console.log('Error de carga', error)
            throw error;
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadCharacters(page);
    }, [page])

    const handleNext = () => {
        if (page < totalPages){
            setPage(prev => prev + 1)
        }
    }
    const handlePrevious = () => {
        if (page > 1){
            setPage(prev => prev - 1)
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style = {styles.header}>Rick & Morty</Text>
            {
                loading ? (
                    <ActivityIndicator size='large'  color="green"/>
                ) : <CharacterList characters={characters}/>
            }
        </ScrollView>
    )
}