import { useRef, useEffect } from 'react';
import { Icon, Marker, } from 'leaflet';
import { IOffer } from '../../types/offer';
import { useMap } from '../../hooks/use-map';
import { MarkerIcon } from '../../const';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks';

type MapPropsType = {
  places: IOffer[],
}

const defaultCustomIcon = new Icon({
  iconUrl: MarkerIcon.DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const selectedCustomIcon = new Icon({
  iconUrl: MarkerIcon.SELECTED,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const Map = ({ places }: MapPropsType) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, places[0]);
  const highlightedOffer = useAppSelector((state) => state.highlightedOffer);

  useEffect(() => {
    if (map) {
      places.forEach((place) => {
        const marker = new Marker({
          lat: place.points.lat,
          lng: place.points.lng,
        });

        marker
          .setIcon(place.id === highlightedOffer ? selectedCustomIcon : defaultCustomIcon)
          .addTo(map);

      });
    }
  }, [map, places, highlightedOffer]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
};

export default Map;
