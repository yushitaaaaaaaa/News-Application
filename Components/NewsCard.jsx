import { Image, StyleSheet, Text, View, TouchableOpacity, Linking, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export const NewsCard = (news) => {
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };
    
    const handleReadMore = () => {
        if (news.news.url) {
            Linking.canOpenURL(news.news.url)
                .then(supported => {
                    if (supported) {
                        return Linking.openURL(news.news.url);
                    } else {
                        Alert.alert("Error", "Cannot open this URL");
                    }
                })
                .catch(err => {
                    console.error("An error occurred", err);
                    Alert.alert("Error", "Cannot open this article");
                });
        } else {
            Alert.alert("Error", "No URL available for this article");
        }
    };
    
    return (
        <View style={styles.card}>
            {news.news.urlToImage ? (
                <Image style={styles.img} source={{uri: news.news.urlToImage}} />
            ) : (
                <View style={styles.placeholderImage}>
                    <Ionicons name="newspaper-outline" size={50} color="#bdbdbd" />
                </View>
            )}
            
            <View style={styles.contentContainer}>
                <Text style={styles.newsTitle}>
                    {news.news.title}
                </Text>
                
                <Text style={styles.description}>
                    {news.news.description || "No description available"}
                </Text>
                
                <View style={styles.footer}>
                    <View style={styles.authorContainer}>
                        <Ionicons name="person-outline" size={14} color="#555" style={styles.icon} />
                        <Text style={styles.author}>
                            {news.news.author || "Unknown Author"}
                        </Text>
                    </View>
                    
                    {news.news.publishedAt && (
                        <View style={styles.dateContainer}>
                            <Ionicons name="calendar-outline" size={14} color="#555" style={styles.icon} />
                            <Text style={styles.date}>
                                {formatDate(news.news.publishedAt)}
                            </Text>
                        </View>
                    )}
                </View>
                
                <TouchableOpacity 
                    style={styles.readMoreButton}
                    onPress={handleReadMore}
                >
                    <Text style={styles.readMoreText}>Read More</Text>
                    <Ionicons name="arrow-forward" size={16} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginBottom: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    img: {
        height: 200,
        width: "100%",
    },
    placeholderImage: {
        height: 200,
        width: "100%",
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        padding: 15,
    },
    newsTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        color: '#333',
        lineHeight: 24,
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginBottom: 15,
        lineHeight: 20,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        flexWrap: 'wrap',
    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    author: {
        fontSize: 12,
        color: '#777',
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    date: {
        fontSize: 12,
        color: '#777',
    },
    icon: {
        marginRight: 4,
    },
    readMoreButton: {
        backgroundColor: '#1e88e5',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
    },
    readMoreText: {
        color: '#fff',
        marginRight: 5,
        fontSize: 12,
        fontWeight: '600',
    }
})