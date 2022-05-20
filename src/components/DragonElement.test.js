import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/configureStore';
import DragonElement from './DragonElement.js';

const dragon = {
  dragon_id: '654',
  dragon_name: 'Dragon',
  description: 'Lorem',
  flickr_images: ['URL'],
  reserved: false,
};

describe('DragonElement component', () => {
  test('component match with the snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <DragonElement
          key={dragon.dragon_id}
          id={dragon.dragon_id}
          name={dragon.dragon_name}
          description={dragon.description}
          flickrImages={dragon.flickr_images[0]}
          reserved={dragon.reserved}
        />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
