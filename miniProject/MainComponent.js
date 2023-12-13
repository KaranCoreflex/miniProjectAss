
import { StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoryPage from './views/CategoryPage';
import ProductPage from './views/ProductsPage';
import AddCategory from './views/AddCategoryList';
import AddProduct from './views/AddProductList';
'@react-navigation/bottom-tabs';

export default function HostComponent() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const HomeScreen = () => (
    <Tab.Navigator>
      <Tab.Screen name="CategoryScreen" component={CategoryPage} />
      <Tab.Screen name="ProductsScreen" component={ProductPage} />
    </Tab.Navigator>
  );
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='HomeScreen' >
                <Stack.Screen options={{ headerShown: false }} name='AddCategory' component={AddCategory} />
                <Stack.Screen options={{ headerShown: false }} name='AddProduct' component={AddProduct} />
                <Stack.Screen options={{ headerShown: false }} name='HomeScreen' component={HomeScreen} /> 
          </Stack.Navigator> 
      </NavigationContainer>
  );
}
