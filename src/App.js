import { Provider } from 'react-redux';

import './index.scss';
import { CharactersList } from './pages/CharactersList/component';
import { Header } from './pages/Header/component';
import {store} from './store/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <CharactersList/>
    </Provider>
  );
}

export default App;
