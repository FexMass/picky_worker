import React, { useRef, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import mapboxgl from 'mapbox-gl';

const MapBox: React.FunctionComponent = () => {
  const token = 'pk.eyJ1IjoieWFzbWluLWUiLCJhIjoiY2xhNmt3bDJoMTd3YjNxcXEwazRteGJjdCJ9.36_xB9MhvJ0hzQ3QN4ZMsQ';
  const mapContainerRef = useRef<HTMLDivElement | string>('') as React.MutableRefObject<HTMLInputElement>;

  const markers = [
    {
      color: '#dd3a17',
      lng: -73.990593,
      lat: 40.740121,
      text: 'Company #1',
    },
    {
      color: '#d58574',
      lng: -73.189438,
      lat: 41.179226,
      text: 'Company #2',
    },
    {
      color: '#8a2b17',
      lng: -75.662415,
      lat: 41.408970,
      text: 'Company #3',
    },
    {
      color: '#96f3b1',
      lng: -95.934502,
      lat: 41.256538,
      text: 'Company #4',
    }
  ];

  useEffect(() => {
    const map = new mapboxgl.Map({
      attributionControl: false,
      accessToken: token,
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [-94.62860696734268, 39.02019939787215],
      zoom: 3.8,
      minZoom: 3,
      maxZoom: 7,
    });

    markers.map(marker => {
      return new mapboxgl.Marker({ color: marker.color })
        .setLngLat([marker.lng, marker.lat])
        .setPopup(new mapboxgl.Popup({ closeButton: false }).setText(marker.text))
        .addTo(map)
        .isDraggable();
    });

    // change cursor to pointer when user hovers over a clickable feature
    map.on('mouseenter', e => {
      if (e.features.length) {
        map.getCanvas().style.cursor = 'pointer';
      }
    });

    // reset cursor to default when user is no longer hovering over a clickable feature
    map.on('mouseleave', () => {
      map.getCanvas().style.cursor = '';
    });

    // Clean up on unmount
    return () => { return map.remove(); };
  }, []);

  return (
    // eslint-disable-next-line max-len
    <Grid container alignItems="center" flexDirection="column" sx={{ height: '100vh', pt: 3, backgroundColor: '#053D4D' }}>
      <Typography variant="body1" paragraph color="white">
        Dependencies: resium cesium
      </Typography>
      <Grid item width="90vw" height="80vh" className="map-container" ref={mapContainerRef} />
    </Grid>
  );
};

export default MapBox;
