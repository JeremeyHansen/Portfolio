import BassBuddyVid from "../BassBuddyVid.mp4";

export default function BassBuddy({ setOpenBassBuddy }) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => setOpenBassBuddy(false)}>
          Close
        </button>
        <video src={BassBuddyVid} loop autoPlay muted></video>
        <h4>Technologies Used: React, Google Map's API, REST Design, CSS</h4>
      </div>
    </div>
  );
}
