import React from "react";
import Header from "../components/Header";
import { Helmet } from "react-helmet-async";

import sweepsData from "../data/sweeps_timeline.json";

// import your images
import img_8th_harrison from "../images/encampments/8th_Harrison.jpg";
import img_2nd_page from "../images/encampments/2nd_Page.jpg";

export default function SweepsTimeline() {
  const images = {
    "8th & Harrison": img_8th_harrison,
    "2nd & Page": img_2nd_page
  };

  const IMAGE_WIDTH = "300px";

  return (
    <>
      <Helmet>
        <title>Sweeps Timeline</title>
        <link rel="canonical" href="https://calusmo.org/sweeps-timeline" />
      </Helmet>

      <Header />

      <div className="header-container">
        <h1>Sweeps Timeline</h1>
        <p>
          Over the past few years, USMO has monitored sweeps that occur in the encampments we serve. A brief history of these sweeps is detailed below.
        </p>
      </div>

      <div style={{ position: "relative", maxWidth: "1000px", margin: "50px auto" }}>
        {/* Timeline line */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "4px",
            backgroundColor: "#ccc",
            transform: "translateX(-50%)",
          }}
        />

        {sweepsData.map((sweep, index) => {
          const isLeftImage = index % 2 === 0;
          const imgSrc = images[sweep.location];

          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1.25rem",
                position: "relative",
                marginBottom: "2rem",
              }}
            >
              {/* Left image */}
              {isLeftImage ? (
                <div style={{ width: IMAGE_WIDTH, flexShrink: 0 }}>
                  {imgSrc && (
                    <img
                      src={imgSrc}
                      alt={sweep.location}
                      style={{
                        width: "100%",
                        borderRadius: "0.75rem",
                      }}
                    />
                  )}
                </div>
              ) : (
                <div style={{ width: IMAGE_WIDTH }} />
              )}

              {/* Center card */}
              <div
                style={{
                  padding: "1.5rem",
                  backgroundColor: "#F5F5F5",
                  borderRadius: "1.25rem",
                  lineHeight: 1.5,
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                  maxWidth: "400px",
                  textAlign: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div style={{ fontWeight: "bold", fontSize: "1.25rem", marginBottom: "0.25rem" }}>
                  {sweep.location}
                </div>
                <div style={{ color: "#555", marginBottom: "0.25rem" }}>
                  {sweep.date}
                </div>
                <div style={{ fontWeight: 500, marginBottom: "0.25rem" }}>
                  Reason: {sweep.reason}
                </div>
                <div>{sweep.note}</div>
              </div>

              {/* Right image */}
              {!isLeftImage ? (
                <div style={{ width: IMAGE_WIDTH, flexShrink: 0 }}>
                  {imgSrc && (
                    <img
                      src={imgSrc}
                      alt={sweep.location}
                      style={{
                        width: "100%",
                        borderRadius: "0.75rem",
                      }}
                    />
                  )}
                </div>
              ) : (
                <div style={{ width: IMAGE_WIDTH }} />
              )}

              {/* Timeline dot */}
              {/* <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  backgroundColor: "#000",
                  zIndex: 2,
                }}
              /> */}
            </div>
          );
        })}
      </div>
    </>
  );
}