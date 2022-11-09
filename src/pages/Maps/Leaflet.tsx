import React from 'react';
import { Grid, Typography } from '@mui/material';
import L, { LatLngExpression } from 'leaflet';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';
import './Leaflet.css';

const Leaflet: React.FunctionComponent = () => {
  const defaultPosition: LatLngExpression = [36.97954, -97.970943];
  const defaultZoom: number = 4.5;

  const markers = [
    {
      id: 'marker-1',
      lng: -73.990593,
      lat: 40.740121,
      text: 'Company #1',
    },
    {
      id: 'marker-2',
      lng: -73.189438,
      lat: 41.179226,
      text: 'Company #2',
    },
    {
      id: 'marker-3',
      lng: -75.662415,
      lat: 41.408970,
      text: 'Company #3',
    },
    {
      id: 'marker-4',
      lng: -95.934502,
      lat: 41.256538,
      text: 'Company #4',
    }
  ];

  const customMarkerIcon = L.icon({
    iconUrl: '/location.png',
    iconSize: [30, 30],
    popupAnchor: [0, -8],
  });

  return (
    // eslint-disable-next-line max-len
    <Grid container flexDirection="column" alignItems="center" sx={{ height: '100vh', pt: 3, backgroundColor: '#053D4D' }}>
      <Typography variant="body1" paragraph color="white">
        Dependencies: leaflet react-leaflet
      </Typography>
      <Grid item width="90vw" height="80vh">
        <MapContainer
          center={defaultPosition}
          zoom={defaultZoom}
          scrollWheelZoom={false}
          attributionControl={false}
        >
          {/* dont know if we need to keep this */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map(marker => {
            return (
              <Marker position={[marker.lat, marker.lng]} icon={customMarkerIcon} key={marker.id}>
                <Popup>
                  <Typography variant="body1" align="center" color="white">
                    {marker.text}
                  </Typography>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </Grid>
    </Grid>
  );
};

export default Leaflet;
