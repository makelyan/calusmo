import L from 'leaflet';
import { useState } from 'react';

function ResourceCard({ resource, isFirst, isLast }) {
    const [expanded, setExpanded] = useState(false);

    const cardStyle = {
        marginTop: isFirst ? '12px' : '0px',
        marginBottom: isLast ? '12px' : '0px',
    };

    const hoursList = resource.hours
        ? resource.hours.split('\n').filter(line => line.trim() !== '')
        : [];
    
    const descList = resource.description
    ? resource.description.split('\n').filter(line => line.trim() !== '')
    : [];

    const contactList = typeof resource.contact === 'string'
    ? resource.contact.split('\n').filter(line => line.trim() !== '')
    : [];

    const onMouseover = () => {
        const marker = window.markerMap?.[resource.id];
        if (marker) {
            const newIcon = createMarkerIcon(
                categoryColors[resource.category] || '#ccc',
                resource.id,
                30 
            );
            marker.setIcon(newIcon);
        }
    };

    const onMouseout = () => {
        const marker = window.markerMap?.[resource.id];
        if (marker) {
            const originalIcon = createMarkerIcon(
                categoryColors[resource.category] || '#ccc',
                resource.id,
                24 // original size
            );
            marker.setIcon(originalIcon);
        }
    };

    return (
        <div className="resource-card" 
            style={cardStyle} 
            onClick={() => setExpanded(!expanded)}
            onMouseEnter={onMouseover}
            onMouseLeave={onMouseout}>
            <div className="card-header">
                <div
                    className="circle"
                    style={{ backgroundColor: categoryColors[resource.category] || '#ccc' }}
                >
                    {resource.id}
                </div>
                <div className="card-title">{resource.name}</div>
                <div
                    className={`dropdown-arrow ${expanded ? 'rotated' : ''}`}
                    style={{
                        marginLeft: 'auto',
                        transition: 'transform 0.3s ease',
                        transform: expanded ? 'rotate(0deg)' : 'rotate(90deg)',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }}
                >
                    ▼
                </div>
            </div>

            {expanded && (
                <div style={{ paddingLeft: 6 }}>
                    {resource.description ? (
                        descList.length > 1 ? (
                            <div style={{ marginTop: 6 }}>
                                <ul>
                                    {descList.map((line, idx) => (
                                        <li key={idx}>{line}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <div style={{ marginTop: 6 }}>
                                <span className="card-section-title">Description: </span>
                                <span>{resource.description}</span>
                            </div>
                        )
                    ) : null}
                    {resource.address && (
                        <div style={{ marginTop: 6 }}>
                            <span className="card-section-title">Address: </span>
                            <span>{resource.address}</span>
                        </div>
                    )}
                    {contactList.length > 1 ? (
                        <>
                            <div className="card-section-title" style={{ marginTop: 6 }}>Contact:</div>
                            <ul>
                                {contactList.map((line, idx) => (
                                    <li key={idx}>{line}</li>
                                ))}
                            </ul>
                        </>
                    ) : contactList.length === 1 ? (
                        <div style={{ marginTop: 6 }}>
                            <span className="card-section-title">Contact: </span>
                            <span>{resource.contact}</span>
                        </div>
                    ) : null}

                    {hoursList.length > 1 ? (
                        <>
                            <div className="card-section-title" style={{ marginTop: 6 }}>Hours:</div>
                            <ul>
                                {hoursList.map((line, idx) => (
                                    <li key={idx}>{line}</li>
                                ))}
                            </ul>
                        </>
                    ) : hoursList.length === 1 ? (
                        <div style={{ marginTop: 6 }}>
                            <span className="card-section-title">Hours: </span>
                            <span>{resource.hours}</span>
                        </div>
                    ) : null}
                </div>
            )}
        </div>
    );
}

function createMarkerIcon(color, label, size=24) {
    const iconHtml = `
      <div style="
        background-color: ${color};
        color: white;
        font-weight: bold;
        font-size: ${size/2}px;
        border-radius: 50%;
        width: ${size}px;
        height: ${size}px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid white;
      ">
        ${label}
      </div>
    `;
  
    return L.divIcon({
      html: iconHtml,
      className: '', 
      iconSize: [size, size],
      iconAnchor: [size/2, size/2]
    });
}

const categoryColors = {
    'Food': '#E74C3C',
    'Medical Services': '#3498DB',
    'Laundry': '#2ECC71',
    'DMV Locations': '#E67E22',
    'Government': '#1ABC9C',
    'Housing Help': '#9B59B6',
    'Legal Help': '#F1C40F',
    'Hygiene': '#34495E',
    'Miscellaneous': '#8c8b8c'
};


const categories = [
    'Medical Services',
    'Housing Help',
    'Legal Help',
    'Food',
    'Laundry',
    'Hygiene',
    'DMV Locations',
    'Government',
    'Miscellaneous'
];

export { ResourceCard, createMarkerIcon, categoryColors, categories };