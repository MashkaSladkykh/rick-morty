import { Provider } from 'react-redux';

import {store} from './store/configureStore';
import { RickMortyApp } from './routes/component';

function App() {
  return (
    <Provider store={store}>
      <div className="root">
        <RickMortyApp/>
      </div>
    </Provider>
  );
}

export default App;
