import FlatifyVid from "../Flatiify.mp4";

export default function Flatify({ setOpenFlatify }) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setOpenFlatify(false)}>
          Close
        </button>
        <video src={FlatifyVid} loop autoPlay muted></video>
        <h4>Technologies Used: React, Spotify's API, REST Design, CSS</h4>
      </div>
    </div>
  );
}
