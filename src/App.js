import { Provider } from 'react-redux';

import './index.scss';
import {store} from './store/configureStore';

function App() {
  return (
    <Provider store={store}>
     
    </Provider>
  );
}

export default App;
