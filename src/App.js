import { Provider } from 'react-redux';

import {store} from './store/configureStore';
import { RickMortyApp } from './routes/component';

export const App = () => {
  return (
    <Provider store={store}>
      <div className="root">
        <RickMortyApp/>
      </div>
    </Provider>
  );
};
