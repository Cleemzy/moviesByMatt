import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Search from './Components/Search'
import Test from './Components/Test'
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import {Store} from './Store/configureStore'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import SplashScreen from 'react-native-splash-screen'

export default class App extends React.Component {

//   useEffect = (()=>{
//   SplashScreen.hide();
// },[]);

  componentDidMount(){
    SplashScreen.hide()
  }
  
  render() {
    let persistor=persistStore(Store)
      return (
        <Provider store={Store}>
            <PersistGate persistor={persistor}>
                <Navigation/>
           </PersistGate>
        </Provider>
      )
  }
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
