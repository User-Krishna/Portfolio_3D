import React, { useEffect, useState } from "react";
import { certificates } from "../constants";

const Certificates = () => {
  const [index, setIndex] = useState(0);

  // auto slide every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) =>
        prev === certificates.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="certificates"
      style={{
        padding: "80px 20px",
        background: "#050816",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "700",
          marginBottom: "30px",
        }}
      >
        Certificates
      </h2>

      {/* Image */}
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <img
          src={certificates[index].image}
          alt={certificates[index].title}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
          }}
        />
        <p style={{ marginTop: "15px", fontSize: "18px" }}>
          {certificates[index].title}
        </p>
      </div>

      {/* Manual buttons */}
      <div style={{ marginTop: "20px" }}>
        {certificates.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            style={{
              width: "12px",
              height: "12px",
              margin: "5px",
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              background: i === index ? "#915EFF" : "#555",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
