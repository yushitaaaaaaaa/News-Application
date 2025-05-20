import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { SplashScreen } from './Screens/SplashScreen';
import { HomeScreen } from './Screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoryScreen from './Screens/CategoryScreen';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const MainStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={DrawerNavigator} />
    </Stack.Navigator>
  );

  const getDrawerScreenOptions = (iconName) => ({
    drawerIcon: ({ focused, color, size }) => (
      <Ionicons name={iconName} size={size} color={focused ? '#1e88e5' : color} />
    ),
    drawerActiveTintColor: '#1e88e5',
    drawerLabelStyle: {
      fontSize: 15,
    },
    headerStyle: {
      backgroundColor: '#1e88e5',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  const DrawerNavigator = () => (
    <Drawer.Navigator 
      initialRouteName="Home"
      screenOptions={{
        drawerType: 'front',
        drawerStyle: {
          backgroundColor: '#f8f8f8',
          width: 280,
        },
        overlayColor: 'rgba(0,0,0,0.7)',
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={getDrawerScreenOptions('home-outline')}
      />
      <Drawer.Screen 
        name="Sports" 
        component={CategoryScreen} 
        initialParams={{ category: 'sports' }} 
        options={getDrawerScreenOptions('football-outline')}
      />
      <Drawer.Screen 
        name="Business" 
        component={CategoryScreen} 
        initialParams={{ category: 'business' }} 
        options={getDrawerScreenOptions('briefcase-outline')}
      />
      <Drawer.Screen 
        name="Entertainment" 
        component={CategoryScreen} 
        initialParams={{ category: 'entertainment' }} 
        options={getDrawerScreenOptions('film-outline')}
      />
      <Drawer.Screen 
        name="Science" 
        component={CategoryScreen} 
        initialParams={{ category: 'science' }} 
        options={getDrawerScreenOptions('flask-outline')}
      />
      <Drawer.Screen 
        name="Technology" 
        component={CategoryScreen} 
        initialParams={{ category: 'technology' }} 
        options={getDrawerScreenOptions('hardware-chip-outline')}
      />
      <Drawer.Screen 
        name="Health" 
        component={CategoryScreen} 
        initialParams={{ category: 'health' }} 
        options={getDrawerScreenOptions('fitness-outline')}
      />
    </Drawer.Navigator>
  );

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1e88e5" />
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});