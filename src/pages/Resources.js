import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ResourceCard, createMarkerIcon, categoryColors, categories } from "../components/Map";
import "../styles/index.css";
import "../styles/resources.css";
import { Helmet } from 'react-helmet-async';

import resourcesData from "../data/resources.json";
import busData from "../data/bus_lines.json";

export default function Resources() {
    const [activeCategories, setActiveCategories] = useState(categories);

    const [resources] = useState(() => {
        return resourcesData.map((r, i) => ({
            id: r.id || i + 1,
            name: r.name || '',
            category: r.category || 'Miscellaneous',
            description: r.description || '',
            address: r.address || '',
            contact: r.contact || '',
            hours: r.hours || '',
            lat: r.lat || null,
            lon: r.lon || null
        }));
    });

    const filteredResources = resources.filter(r =>
        activeCategories.includes(r.category)
    );

    useEffect(() => {
        const map = L.map('map').setView([37.84, -122.26], 12);
    
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);
    
        const markerMap = {};
    
        filteredResources.forEach(resource => {
            if (resource.lat && resource.lon) {
                const icon = createMarkerIcon(categoryColors[resource.category] || '#ccc', resource.id);
                const marker = L.marker([parseFloat(resource.lat), parseFloat(resource.lon)], { icon }).addTo(map);
                marker.bindPopup(`<b>${resource.name}</b><br>${resource.address}`);
                markerMap[resource.id] = marker;
            }
        });
    
        const busLineColors = {
            '51B': '#00643C',
            '6': '#0255fa'
        };
    
        const busLines = {};
        busData.forEach(stop => {
            if (!busLines[stop.line]) busLines[stop.line] = [];
            busLines[stop.line].push(stop);
        });
    
        Object.keys(busLines).forEach(line => {
            const stops = busLines[line];
            const coords = stops.map(s => [s.lat, s.lon]);
            const polyline = L.polyline(coords, {
                color: busLineColors[line] || '#000000',
                weight: 6,
                opacity: 0.9
            }).addTo(map);
    
            polyline.bindTooltip(`Bus Line: ${line}`, { permanent: false, sticky: true, direction: 'top' });
    
            stops.forEach(stop => {
                const marker = L.circleMarker([stop.lat, stop.lon], {
                    radius: 2.5,
                    fillColor: busLineColors[line] || '#000000',
                    color: busLineColors[line] || '#000000',
                    weight: 2,
                    opacity: 1,
                    fillOpacity: 1
                }).addTo(map);
    
                if (stop.stop && stop.stop.trim() !== "") {
                    marker.bindTooltip(`Stop: ${stop.stop}<br>Line: ${line}`, { permanent: false, sticky: true, direction: 'top' });
                }
            });
        });
    
        const allCoords = [
            ...filteredResources.filter(r => r.lat && r.lon).map(r => [parseFloat(r.lat), parseFloat(r.lon)]),
            ...busData.map(s => [s.lat, s.lon])
        ];
    
        if (allCoords.length) map.fitBounds(allCoords);
    
        window.markerMap = markerMap;
    
        return () => {
            map.remove();
            window.markerMap = null;
        };
    }, [filteredResources, busData]);

    return (
        <>
            <Helmet>
                <title>Resources</title>
                <link rel="canonical" href="https://calusmo.org/resources" />
            </Helmet>
            <Header />
            <div className="header-container">
                <h1>Resources</h1>
                <p>
                    Browse free resources in Berkeley and Oakland for medical services, food, housing, laundry and more through the map below!
                </p>
            </div>
            <div className="grid-container-resources">
                <div className="grid-item-resources labels">
                    
                    {categories.map(cat => {
                        const isActive = activeCategories.includes(cat);
                        return (
                            <p
                                key={cat}
                                onClick={() => {
                                    setActiveCategories(prev =>
                                        prev.includes(cat)
                                            ? prev.filter(c => c !== cat)
                                            : [...prev, cat]
                                    );
                                }}
                                style={{
                                    border: `3px solid ${categoryColors[cat]}`,
                                    backgroundColor: isActive ? categoryColors[cat] : `${categoryColors[cat]}33`,
                                    color: isActive ? 'white' : '#333',
                                }}
                                className="resources-legend"
                            >
                                {cat}
                            </p>
                        );
                    })}
                </div>

                <div className="grid-item-resources map">
                    <div id="map" className="map"></div>
                </div>

                <div className="grid-item-resources list">
                    {filteredResources.map((resource, index) => (
                        <ResourceCard
                            key={resource.id}
                            resource={resource}
                            isFirst={index === 0}
                            isLast={index === filteredResources.length - 1}
                        />
                    ))}
                </div>

                <div className="quick-links">
                    <h2 className="quick-links">Quick Links</h2>
                    <p>Downloads</p>
                    <ul> 
                        {/* implicity the root directory here is /public */}
                        <li><a href="/downloads/Resources_Map_USMO.pdf">Resources Brochure with Map
                            <i className="fas fa-download fa-sm" style={{marginLeft: 4}}></i></a></li>
                        <li><a href="/downloads/Housing_Resources_USMO.pdf">Housing Resources Brochure
                            <i className="fas fa-download fa-sm" style={{marginLeft: 4}}></i></a></li>
                        <li><a href="/downloads/Coordinated_Entry_USMO.pdf">Coordinated Entry Guide
                            <i className="fas fa-download fa-sm" style={{marginLeft: 4}}></i></a></li>
                        <li><a href="/downloads/Sweeps_USMO.pdf">What to do if you're stopped, searched, or swept while unhoused
                            <i className="fas fa-download fa-sm" style={{marginLeft: 4}}></i></a></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
}