import {useEffect} from 'react';
import {connect} from 'react-redux';
import {useParams, useNavigate} from 'react-router-dom';
import {selectCharacterDetails} from 'store/characters/selectors';
import {setCharacterDetails} from 'store/characters/actions';
import {generateApiUrl} from 'pages/utils';
import arrow from 'img/arrow.svg';
import 'scss/details.scss';

const Details = ({characterDetails, setCharacterDetails}) => {
  const {Id} = useParams();  
  const navigate = useNavigate();

  useEffect(() => {
    fetch(generateApiUrl(`character/${Id}`))
      .then(res => res.json())
      .then(data => {
        setCharacterDetails(data);
      });}, [setCharacterDetails, Id]);
  
  return (
    <main className="container">
      <button onClick={()=>navigate(-1)} className="back">
        <img src={arrow} alt="arrow" className="arrow" />
        Go back
      </button>     
      <div className="details">
        <div className="details__container">
          <img src={characterDetails.image} alt={characterDetails.name} className="details__img" />
          <h3 className="details__name">{characterDetails.name}</h3>
        </div>    
        <div className="details__information">
          <h3>Informations</h3>
          <div>
            <div>
              <h4>Gender</h4>
              <p>{characterDetails.gender}</p>
            </div>
            <div>
              <h4>Status</h4>
              <p>{characterDetails.status}</p>
            </div>
            <div>
              <h4>Specie</h4>
              <p>{characterDetails.species}</p>
            </div>
            <div>
              <h4>Origin</h4>
              <p>{characterDetails.origin ? characterDetails.origin.name : 'Unknnown'}</p>
            </div>
            <div>
              <h4>Type</h4>
              <p>{characterDetails.type === '' ? 'Unknown' : characterDetails.type}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
  
const mapStateToProps = state => ({
  characterDetails: selectCharacterDetails(state),
});
  
const mapDispatchToProps = {
  setCharacterDetails,
};
  
export const Character = connect(mapStateToProps, mapDispatchToProps)(Details);