import React from 'react';
import {View} from 'react-native';
import {
  NavigationContainer,
  ParamListBase,
  RouteProp,
  NavigationContainerRef,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Home from './app/screens/Home';
import Characters from './app/screens/Characters';
import {CharacterInterface} from './app/interfaces/characterInterface';
import CharacterDetail from './app/screens/CharacterDetail';
import {backgroundColor, tintColor} from './app/theme/colors';
import FilmDetail from './app/screens/FilmDetail';

export type RootStackParamList = {
  Home: undefined;
  Characters: {queryKey: string};
  CharacterDetail: {characterInfo: CharacterInterface};
  FilmDetail: {filmUrl: string};
};

export declare type NativeStackScreenProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string,
> = {
  navigation: NativeStackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const navigationRef =
  React.createRef<NavigationContainerRef<ReactNavigation.RootParamList>>();

const queryClient = new QueryClient();

const headerStatus = (
  <View style={{flex: 1, backgroundColor: backgroundColor}} />
);
const headerStyle = {
  headerTitleStyle: {color: tintColor},
  headerTintColor: tintColor,
  headerBackground: () => headerStatus,
};

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Star Wars',
              ...headerStyle,
            }}
          />
          <Stack.Screen
            name="Characters"
            component={Characters}
            options={{
              ...headerStyle,
            }}
          />
          <Stack.Screen
            name="CharacterDetail"
            component={CharacterDetail}
            options={({route}) => ({
              title: route.params.characterInfo.name,
              ...headerStyle,
            })}
          />
          <Stack.Screen
            name="FilmDetail"
            component={FilmDetail}
            options={({route}) => ({
              ...headerStyle,
            })}
          />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
