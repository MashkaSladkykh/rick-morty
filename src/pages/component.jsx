import { Header } from './Header/component';
import { Search } from './Form/component';
import { CharactersList } from './CharactersList/component';

export const Home = () => (
  <>
    <Header/>
    <Search/>
    <CharactersList/>
  </>
);