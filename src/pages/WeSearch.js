import NotefulVid from "../Noteful.mp4"

export default function WeSearch({ setOpenWeSearch }) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setOpenWeSearch(false)}>
          Close
        </button>
        <video
            src={NotefulVid}
            loop
            autoPlay
            muted
          ></video>
          <h4>Technologies Used: React, Ruby, SQLite3, CSS</h4>
      </div>
    </div>
  );
}
