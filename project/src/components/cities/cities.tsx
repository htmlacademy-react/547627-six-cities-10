import { PlacesList } from '..';
import { CitiesEmpty } from '../cities-empty';
import { IOffer } from '../../types/offer';
import { Map } from '../map';
import { useAppSelector } from '../../hooks';
import { PlacesOptions } from '../places-options';

type CitiesPropsType = {
  places: IOffer[],
}

const Cities = ({ places }: CitiesPropsType) => {
  const { offers, selectedCity } = useAppSelector((state) => state);

  return (
    <div className="cities">
      {offers.length === 0 ? <CitiesEmpty name={selectedCity} /> :
        (
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {selectedCity}</b>
              <PlacesOptions />
              <PlacesList places={offers} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map places={places} />
              </section>
            </div>
          </div>
        )}
    </div>
  );
};

export default Cities;
