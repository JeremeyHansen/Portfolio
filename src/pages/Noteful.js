import NotefulVid from "../Noteful.mp4"

export default function Noteful({ setOpenNoteful }) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setOpenNoteful(false)}>
          Close
        </button>
        <video
            src={NotefulVid}
            loop
            autoPlay
            muted
          ></video>
          <h4>Technologies Used: React, Ruby, Rails, PostgreSql, CSS</h4>
      </div>
    </div>
  );
}
