'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styles from './WorldMap.module.css';

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const locations = [
  { lat: 10.5, lng: 7.4, label: 'Nigeria – Emergency mission (2023)' },
  { lat: -23.55, lng: -46.63, label: 'Brazil – Long-term center (since 2015)' },
  { lat: 48.85, lng: 2.35, label: 'France – Workshops & support (2022–2024)' },
  { lat: 40.71, lng: -74.01, label: 'USA – HQ & urban care (2001–ongoing)' },
  { lat: 33.85, lng: 35.5, label: 'Lebanon – Refugee camp mission (2025)' },
  { lat: -33.45, lng: -70.67, label: 'Chile – Earthquake response (2020)' },
  { lat: 12.65, lng: -8.0, label: 'Mali – Training & empowerment (2023)' }
];

export default function WorldMap() {
  return (
    <section className={styles.mapSection}>
      <h2 className={styles.title}>Where we act</h2>
      <MapContainer center={[10, 0]} zoom={2} scrollWheelZoom={false} className={styles.map}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        />
        {locations.map((loc, i) => (
          <Marker key={i} position={[loc.lat, loc.lng]} icon={markerIcon}>
            <Popup>{loc.label}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
}
