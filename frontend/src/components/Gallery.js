import React from "react";
import img1 from "../image/img1.jpg";
import img2 from "../image/img2.jpg";
import img3 from "../image/img3.jpg";
import img4 from "../image/img4.jpg";
import img5 from "../image/img5.jpg";
import img6 from "../image/img6.jpg";

function Gallery() {
  return (
    <div className="gallery-page">
      <h1>PNC Gallery</h1>
      <p className="gallery-desc">
        
      </p>

      <div className="gallery-grid">
        <div className="gallery-item">
          <img src={img1} alt="PNC Facility 1" />
          <p>University Building</p>
        </div>

        <div className="gallery-item">
          <img src={img2} alt="PNC Facility 2" />
          <p>Campus Grounds</p>
        </div>

        <div className="gallery-item">
          <img src={img3} alt="PNC Facility 3" />
          <p>Academic Hall</p>
        </div>

        <div className="gallery-item">
          <img src={img4} alt="PNC Facility 4" />
          <p>Student Area</p>
        </div>

        <div className="gallery-item">
          <img src={img5} alt="PNC Facility 5" />
          <p>Library and Study Zone</p>
        </div>

        <div className="gallery-item">
          <img src={img6} alt="PNC Facility 6" />
          <p>University Entrance</p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
