import '../../scss/form.scss';
import { generateApiUrl } from '../utils';

export const Form = () => {
  const handleChange = e => {
    fetch(generateApiUrl(`character/?name=${e.target.value}`))
      .then(response => response.json())
      .then(data => {
      // Process data as needed
        console.log(data.results);
      })
  };

  return (
    <form action="" className="search">
      <input className="search__field" type="text" placeholder="Filter by name..."  onChange={handleChange}/>           
    </form>
  );
};