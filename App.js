import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import Dashboard from './screens/Dashboard';
import NewOrderScreen from './screens/SiteManager/NewOrderScreen';
import AllOrdersScreen from './screens/SiteManager/AllOrdersScreen';
import Quotations from './screens/Supplier/Quotations';
import NewInvoiceScreen from './screens/Supplier/NewInvoiceScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Register'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Dashboard' component={Dashboard} />
        <Stack.Screen name='NewOrder' component={NewOrderScreen} />
        <Stack.Screen name='AllOrders' component={AllOrdersScreen} />
        <Stack.Screen name='Quotes' component={Quotations} />
        <Stack.Screen name='NewInvoice' component={NewInvoiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
