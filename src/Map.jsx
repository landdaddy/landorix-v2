import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoilanddaddyIiwiYSI6ImN...pk.eyJ1IjoibGFuZGRhZGR5IiwiYSI6ImNtaTZ6ajRnMDA0MjIyanEzZGRja29qeDUifQ.pJlxJzTZCSuDBfBN8A-ZtQ...';

const PINAL_BOUNDS = [-112.5, 32.3, -110.5, 33.3];

export default function Map({ darkMode }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: darkMode ? 'mapbox://styles/mapbox/dark-v11' : 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [-98.5, 39.8], // center of USA
      zoom: 3,
    });

    map.current.on('load', () => {
      // 8-second cinematic zoom into Pinal County
      map.current.flyTo({
        center: [-111.3, 32.8],
        zoom: 10,
        essential: true,
        duration: 8000,
        curve: 1.42
      });
    });

    // Placeholder parcels (replace with real fetch later)
    const fakeParcels = [
      { lng: -111.55, lat: 32.9, acres: 8.1, zoning: "SR", potential: "VERY HIGH", apn: "301-22-018A" },
      { lng: -111.62, lat: 32.75, acres: 5.2, zoning: "GR", potential: "HIGH", apn: "401-15-007" }
    ];

    fakeParcels.forEach(p => {
      new mapboxgl.Marker({ color: p.potential === "VERY HIGH" ? '#ff0066' : '#ff6600' })
        .setLngLat([p.lng, p.lat])
        .setPopup(new mapboxgl.Popup().setHTML(`
          <div style="color:#000">
            <b>${p.apn}</b><br>
            ${p.acres} acres • ${p.zoning}<br>
            ${p.potential}
          </div>
        `))
        .addTo(map.current);
    });

  }, [darkMode]);

  return <div ref={mapContainer} style={{ width: '100vw', height: '100vh' }} />;
}
