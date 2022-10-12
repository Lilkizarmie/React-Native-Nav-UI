import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { Provider } from 'react-native-paper';

import Colors from './src/constants/Colors';

import AnimTab1 from './BottomTab/AnimTab1';
import AnimTab2 from './BottomTab/AnimTab2';
import AnimTab3 from './BottomTab/AnimTab3';
import Home from './BottomTab/Home';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };

  return (
    <Provider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={Colors.white} />
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const options = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
}

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="Home" component={Home}
        options={{ title: 'React-Native Ui', headerShown: true }} />
      <Stack.Screen name="Tab1" component={AnimTab1} />
      <Stack.Screen name="Tab2" component={AnimTab2} />
      <Stack.Screen name="Tab3" component={AnimTab3} />
    </Stack.Navigator>
  )
}

export default App;
