'use client';

import { useEffect, useRef } from 'react';

export default function InteractiveMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const initializeMap = async () => {
      const L = (await import('leaflet')).default;
      await import('leaflet/dist/leaflet.css');

      // Check if map already exists on this container (prevents double init in StrictMode)
      if (mapContainer.current._leaflet_id) return;

      // Fix default marker icons
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      });

      // Banyuwangi location coordinates
      const lat = -8.2248;
      const lng = 114.3648;

      // Initialize map
      map.current = L.map(mapContainer.current).setView([lat, lng], 13);

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map.current);

      // Add marker at Jajanan Mimitha location
      const marker = L.marker([lat, lng])
        .bindPopup(
          `<div class="font-bold">Jajanan Mimitha</div><div class="text-sm">Banyuwangi, Jawa Timur</div>`
        )
        .addTo(map.current)
        .openPopup();

      // Add click handler to marker
      marker.on('click', () => {
        const proceed = window.confirm('Buka lokasi di Google Maps?');
        if (proceed) {
          window.open('https://maps.app.goo.gl/CfqPjyF7GfmAU1PL9', '_blank');
        }
      });
    };

    initializeMap();

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      className="h-full w-full rounded-[1.5rem]"
      style={{ minHeight: '400px' }}
    />
  );
}
