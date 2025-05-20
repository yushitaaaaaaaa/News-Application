import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View, RefreshControl, Alert } from "react-native";
import { styles } from "./App.styles";
import axios from "axios";
import { NewsCard } from "../Components/NewsCard";
import CountrySelector from "../Components/CountrySelector";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const HomeScreen = () => {
    const API_KEY = 'aa6dee7f4fdf4b8b85ee745b9f3d15c7';
    const [country, setCountry] = useState('us');
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadCountryPreference();
    }, []);

    useEffect(() => {
        fetchNews();
        saveCountryPreference(country);
    }, [country]);

    const loadCountryPreference = async () => {
        try {
            const savedCountry = await AsyncStorage.getItem('preferredCountry');
            if (savedCountry) {
                setCountry(savedCountry);
            }
        } catch (error) {
            console.error("Error loading country preference:", error);
        }
    };

    const saveCountryPreference = async (countryCode) => {
        try {
            await AsyncStorage.setItem('preferredCountry', countryCode);
        } catch (error) {
            console.error("Error saving country preference:", error);
        }
    };

    const fetchNews = async () => {
        setLoading(true);
        setError(null);
        const newsURL = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;
        try {
            console.log("Getting News From:", newsURL);
            const res = await axios.get(newsURL);
            
            if (res.data && res.data.status === 'ok') {
                setNews(res.data.articles || []);
            } else {
                setNews([]);
                if (res.data && res.data.message) {
                    setError(res.data.message);
                } else {
                    setError("Could not fetch news for the selected country");
                }
                console.error("API Error:", res.data);
            }
            setLoading(false);
            setRefreshing(false);
        } catch (error) {
            console.error("Error while fetching news:", error);
            setNews([]);
            setError(
                error.response?.data?.message || 
                "There was a problem getting the news. The News API developer plan has restrictions that may limit access to certain countries."
            );
            setLoading(false);
            setRefreshing(false);
        }
    };

    const handleRefresh = () => {
        setRefreshing(true);
        fetchNews();
    };

    const handleCountryChange = (newCountry) => {
        setCountry(newCountry);
    };

    return (
        <View style={styles.container}>
            
            <View style={styles.countrySelector}>
                <CountrySelector 
                    selectedCountry={country} 
                    onSelectCountry={handleCountryChange}
                />
            </View>
            
            {loading && !refreshing ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#1e88e5" />
                </View>
            ) : (
                <FlatList
                    data={news}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <NewsCard news={item} />}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                            colors={["#1e88e5"]}
                        />
                    }
                    ListEmptyComponent={
                        <View style={{ padding: 20, alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, color: '#666', textAlign: 'center' }}>
                                {error || "No news articles available at the moment."}
                            </Text>
                            {error && error.includes("API") &&
                                <Text style={{ fontSize: 14, color: '#666', marginTop: 10, textAlign: 'center' }}>
                                    Note: The free version of News API only allows full functionality for 
                                    development environments. In production, it may only return results for the 'us' country.
                                </Text>
                            }
                            <Text style={{ fontSize: 14, color: '#1e88e5', marginTop: 20, textAlign: 'center' }}>
                                Pull down to try again
                            </Text>
                        </View>
                    }
                />
            )}
        </View>
    );
};
