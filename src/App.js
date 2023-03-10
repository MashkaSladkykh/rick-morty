import { Provider } from 'react-redux';

import { CharactersList } from './pages/CharactersList/component';
import { Search } from './pages/Form/component';
import { Header } from './pages/Header/component';
import {store} from './store/configureStore';

function App() {
  return (
    <Provider store={store}>
      <div className="root">
        <Header/>
        <Search/>
        <CharactersList/>
      </div>
    </Provider>
  );
}

export default App;
