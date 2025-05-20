import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { NewsCard } from '../Components/NewsCard';
import { styles } from './App.styles';
import CountrySelector from '../Components/CountrySelector';

const API_KEY = '{YOUR_API_KEY}'; 

const CategoryScreen = ({ route }) => {
  const { category } = route.params;
  const [country, setCountry] = useState('us'); 
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNews();
  }, [country]);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
        const newsURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;
        console.log("Getting Category News From:", newsURL);
        const response = await fetch(newsURL);
        const data = await response.json();
        
        if (data && data.status === 'ok') {
            setNews(data.articles || []);
        } else {
            setNews([]);
            if (data && data.message) {
                setError(data.message);
            } else {
                setError("Could not fetch news for the selected category and country");
            }
            console.error("API Error:", data);
        }
        
        setLoading(false);
        setRefreshing(false);
    } catch (error) {
      console.error("Error fetching category news:", error);
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
                {error || "No news articles available for this category at the moment."}
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

export default CategoryScreen;
