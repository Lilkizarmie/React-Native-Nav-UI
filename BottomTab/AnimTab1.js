import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon, { Icons } from '../components/Icons';
import Colors from '../src/constants/Colors';
import ColorScreen from '../screens/ColorScreen';
import * as Animatable from 'react-native-animatable';

const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.Feather, activeIcon: 'home', inActiveIcon: 'home', component: ColorScreen },
  { route: 'Wallet', label: 'Wallet', type: Icons.MaterialIcons, activeIcon: 'storefront', inActiveIcon: 'storefront', component: ColorScreen },
  { route: 'Like', label: 'Stores', type: Icons.Ionicons, activeIcon: 'wallet', inActiveIcon: 'wallet', component: ColorScreen },
  { route: 'Search', label: 'Cart', type: Icons.Feather, activeIcon: 'shopping-cart', inActiveIcon: 'shopping-cart', component: ColorScreen },
  { route: 'Account', label: 'Account', type: Icons.FontAwesome, activeIcon: 'user-circle', inActiveIcon: 'user-circle-o', component: ColorScreen },
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({0: {scale: .5, rotate: '0deg'}, 1: {scale: 1.5, rotate: '360deg'}});
    } else {
      viewRef.current.animate({0: {scale: 1.5, rotate: '360deg'}, 1: {scale: 1, rotate: '0deg'}});
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.container}>
        <Icon type={item.type} name={focused ? item.activeIcon : item.inActiveIcon} color={focused ? Colors.primary : Colors.primaryLite} />
      </Animatable.View>
    </TouchableOpacity>
  )
}

export default function AnimTab1() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16
        }
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})