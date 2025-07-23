import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ResourceCard, createMarkerIcon, categoryColors, categories } from "../components/Map";
import "../styles/index.css";
import "../styles/resources.css";

import resourcesData from "../data/resources.json";

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
        window.markerMap = markerMap;

        return () => {
            map.remove();
            window.markerMap = null;
        };
    }, [filteredResources]);

    return (
        <>
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
                                    cursor: 'pointer',
                                    border: `3px solid ${categoryColors[cat]}`,
                                    borderRadius: '8px',
                                    padding: '6px 10px',
                                    backgroundColor: isActive ? categoryColors[cat] : `${categoryColors[cat]}33`,
                                    color: isActive ? 'white' : '#333',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    transition: '0.2s all ease-in-out',
                                    width: '100%',
                                    maxWidth: '180px',
                                    boxSizing: 'border-box',
                                  }}
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
                        <li>Resources Brochure with Map: <a href="https://drive.google.com/file/d/1GQNiw55GyjUoo3AfeKHHf6u9fW9x82og/view?usp=share_link">View PDF</a></li>
                        <li>Housing Resources Brochure: <a href="https://drive.google.com/file/d/1PMsNj6WkBnXePwDDc1yN_iuOG1MfL--E/view?usp=share_link">View PDF</a></li>
                        <li>Coordinated Entry Guide: <a href="https://drive.google.com/file/d/1wNnCG6cychbDm5l3h5WpSJMXS1I1Od-b/view?usp=share_link">View PDF</a></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
}