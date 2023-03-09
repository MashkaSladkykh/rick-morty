import { Provider } from 'react-redux';

import './index.scss';
import { CharactersList } from './pages/CharactersList/component';
import {store} from './store/configureStore';

function App() {
  return (
    <Provider store={store}>
      <CharactersList/>
    </Provider>
  );
}

export default App;
