import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import { City, Offer, Offers } from '../../../shared/types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../../shared/const';
import { useMap } from '../hooks/useMap';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  variant: 'offer' | 'cities';
  city: City;
  offers: Offers;
  chosenId: Offer['id'] | null;
};

const createIcon = (iconUrl: string) => new Icon({
  iconUrl,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const defaultCustomIcon = createIcon(URL_MARKER_DEFAULT);
const currentCustomIcon = createIcon(URL_MARKER_CURRENT);

export function Map({city, offers, chosenId, variant}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const {latitude, longitude} = offer.location;
        const marker = new Marker({
          lat: latitude,
          lng: longitude
        });
        marker
          .setIcon(
            chosenId !== null && offer.id === chosenId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, chosenId]);

  return <section className={`${variant}__map map`} style={{height: '500px'}} ref={mapRef}></section>;
}

