import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibGFuZGRhZGR5IiwiYSI6ImNtaTZ6ajRnMDA0MjIyanEzZGRja29qeDUifQ.pJlxJzTZCSuDBfBN8A-ZtQ';

const PINAL_CENTER = [-111.3, 32.8];

export default function Map({ darkMode }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: darkMode ? 'mapbox://styles/mapbox/dark-v11' : 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [0, 20],
      zoom: 1.8,
      pitch: 0, // Flat for fast load
      bearing: 0
    });

    // 8-second zoom into Pinal County
    setTimeout(() => {
      map.current.flyTo({
        center: PINAL_CENTER,
        zoom: 11,
        duration: 8000,
        essential: true
      });
    }, 1000);

    // Fake pins
    const fakeParcels = [
      { lng: -111.55, lat: 32.9, acres: 8.1, potential: "VERY HIGH" },
      { lng: -111.62, lat: 32.75, acres: 5.2, potential: "HIGH" }
    ];

    fakeParcels.forEach(p => {
      new mapboxgl.Marker({ color: p.potential === "VERY HIGH" ? '#ff006e' : '#ff6b00' })
        .setLngLat([p.lng, p.lat])
        .addTo(map.current);
    });

  }, [darkMode]);

  return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
}
