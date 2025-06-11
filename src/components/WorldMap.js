'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styles from './WorldMap.module.css';
import useTranslation from '@/hooks/useTranslation';

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const locations = [
  { lat: 10.5, lng: 7.4, key: 'nigeria' },
  { lat: -23.55, lng: -46.63, key: 'brazil' },
  { lat: 48.85, lng: 2.35, key: 'france' },
  { lat: 40.71, lng: -74.01, key: 'usa' },
  { lat: 33.85, lng: 35.5, key: 'lebanon' },
  { lat: -33.45, lng: -70.67, key: 'chile' },
  { lat: 12.65, lng: -8.0, key: 'mali' }
];

export default function WorldMap() {
  const { t } = useTranslation();

  return (
    <section className={styles.mapSection}>
      <h2 className={styles.title}>{t('map.title')}</h2>
      <MapContainer center={[10, 0]} zoom={2} scrollWheelZoom={false} className={styles.map}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        />
        {locations.map((loc, i) => (
          <Marker key={i} position={[loc.lat, loc.lng]} icon={markerIcon}>
            <Popup>{t(`map.markers.${loc.key}`)}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
}
