import {Link, Route, Routes} from 'react-router-dom';

import { Home } from '../pages';
import {Character} from '../pages/Details';

export const RickMortyApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path=":character/:Id" element={<Character/>}/>
      <Route
        path="*"
        element={
          <main style={{padding: '1rem'}}>
            <p>There's nothing here!</p>
            <Link to="/">Go to homepage</Link>
          </main>
        }
      />
    </Routes>
  );
};