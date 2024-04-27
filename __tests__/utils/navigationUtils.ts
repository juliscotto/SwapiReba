import {ParamListBase} from '@react-navigation/native';
import {NativeStackScreenProps, RootStackParamList} from '../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type Navigation<
  P extends ParamListBase = ParamListBase,
  R extends keyof P = keyof ParamListBase,
> = NativeStackScreenProps<P, R>;
export type RootScreen = keyof RootStackParamList;

const navigatorMock = {
  state: {
    key: 'key',
    index: 0,
    routeName: 'route',
    routes: [],
    isTransitioning: false,
  },
  dispatch: jest.fn(),
  goBack: jest.fn(),
  canGoBack: jest.fn().mockReturnValue(true),
  dismiss: jest.fn(),
  getParam: jest.fn().mockReturnValue(true),
  navigate: jest.fn(),
  addListener: jest.fn(),
  getParent: jest.fn(),
  getId: jest.fn(),
  getState: jest.fn(),
  setParams: jest.fn(),
  setOptions: jest.fn(),
  isFirstRouteInParent: jest.fn().mockReturnValue(false),
  emit: jest.fn(),
  isFocused: jest.fn().mockReturnValue(true),
  removeListener: jest.fn(),
};

export const navigationMocked = {
  ...navigatorMock,
  push: jest.fn().mockReturnValue(true),
  pop: jest.fn().mockReturnValue(true),
  reset: jest.fn().mockReturnValue(true),
  replace: jest.fn().mockReturnValue(true),
  popToTop: jest.fn().mockReturnValue(true),
};

const getNavigationMock = <
  RouteName extends RootScreen,
>(): NativeStackNavigationProp<RootStackParamList, RouteName> =>
  navigationMocked;

export const navigationPropsMocked = <RouteName extends RootScreen>(
  params?: RootStackParamList[RouteName],
): Navigation<RootStackParamList, RouteName> => ({
  navigation: getNavigationMock(),
  route: {
    key: '',
    name: '',
    params,
  } as unknown as Navigation<RootStackParamList, RouteName>['route'],
});
