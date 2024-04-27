import {render, fireEvent} from '@testing-library/react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import {navigationPropsMocked} from '../../../__tests__/utils/navigationUtils';
import Characters from '.';

describe('render Characters', () => {
  it('Renders Characters screen', () => {
    // no lo termine porque me empezzo a fallar la configuracion de jest en el proyecto y me estaba costando arreglarla. Por tema de tiempos
    const {getByText} = render(<Characters {...navigationPropsMocked()} />);
  });
});
