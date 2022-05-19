import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import Dragons from './dragons';

describe('Dragons component', () => {
  test('component match with the snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
