import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import CategoryScreen from '../Screens/CategoryScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Sports" component={CategoryScreen} />
        <Drawer.Screen name="Business" component={CategoryScreen} />
        <Drawer.Screen name="Education" component={CategoryScreen} />
        <Drawer.Screen name="Science & Tech" component={CategoryScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;