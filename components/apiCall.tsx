import React, { useState, useEffect } from "react";
import {Text, TextInput, StyleSheet, View, Button } from "react-native";

const API_HOST = "numbersapi.p.rapidapi.com";
const API_KEY = "e665a471c5msha087d1c48725785p1b98b8jsn737ad7b42816";


export default function ApiCall() {
    const [error, setError] = useState<null | Error>(null);
    const [month, setMonth] = useState<string>("");
    const [day, setDay] = useState<string>("");
    const [fact, setFact] = useState("");

    useEffect(() => {
        if (month && day) {
            fetchFact();
        }
    }, [month, day]);

    const fetchFact = async() => {
        try {
            const fetch = require('node-fetch');
            const url = `https://${API_HOST}/${month}/${day}/date`;
            const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': API_KEY,
                        'x-rapidapi-host': API_HOST
                    }
            });
            const result = await response.text();
            setFact(result);
        } catch (error) {
            console.error('Error fetching fact: ', error);
            setFact('Failed to fetch fact');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.fact}>{fact}</Text>
            <Text style={styles.label}>Enter a month:</Text>
            <TextInput 
                value={month} 
                onChangeText={(text) => setMonth(text)}
                maxLength={2} 
                placeholder="Enter Month (1-12)"
                />
            <Text style={styles.label}>Enter a day:</Text>
            <TextInput 
                value={day} 
                onChangeText={(text) => setDay(text)}
                maxLength={2} 
                placeholder="Enter Day (1-31)"
                />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f4f0',
        padding: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    fact: {
        fontSize: 32,
    },
});