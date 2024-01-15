import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useSelector } from 'react-redux';
import { getArticle } from './redux/Actions/actionGetArticles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ButtonCart from './components/ButtonCart';
import Cart from './screens/Cart';
import Colors from './styles/Colors';
import { AntDesign } from '@expo/vector-icons';
import ButtontLogo from './components/ButtontLogo';

const Stack = createNativeStackNavigator();
export default function App() {
  store.dispatch(getArticle())


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerRight:()=> <ButtonCart navig={'Cart'} styleled={styles.buttonCartContenaire}>
                              <AntDesign name="shoppingcart" size={24} color="black" />
                            </ButtonCart>,
            headerLeft:()=> <ButtontLogo navig={'Home'}  styleled={styles.iconHeaderContenaire}> 
                              <Image 
                                  style={styles.iconHeader} 
                                  source={require('./assets/Images/e-business.png')} 
                              />
                            </ButtontLogo>,
            headerTitle:'Dash&SeleMarket',
            headerStyle:{
              backgroundColor: Colors.black,
              // color: Colors.white
            },
            headerTintColor:Colors.white
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Cart" component={Cart} />
          {/* <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconHeader:{
    width:35,
    height:35
  },
  buttonCartContenaire:{
    backgroundColor: Colors.white,
    padding:10,
    borderRadius:23
  },
  iconHeaderContenaire:{
    backgroundColor: Colors.dark,
    borderRadius:50,
    margin:10,
    marginLeft:0
  }
});
