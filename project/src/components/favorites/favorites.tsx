import { FavoriteItem } from '../../components';

import { IOffer } from '../../types/offer';

type FavoritesPropsType = {
  favorites: IOffer[],
}

const Favorites = ({ favorites }: FavoritesPropsType) => {
  const groupedFavorites = favorites.reduce((acc, place) => {
    acc.set(place.city, [...acc.get(place.city) || [], place]);
    return acc;
  }, new Map<string, IOffer[]>());
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {[...groupedFavorites.entries()].map((group) => <FavoriteItem key={group[0]} groupName={group[0]} places={group[1]} />)}
      </ul>
    </section>
  );
};

export default Favorites;
