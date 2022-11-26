import OnlyJamsVid from "../OnlyJams.mp4";


export default function OnlyJams({ setOpenOnlyJams }){
    return (
        <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={() => setOpenOnlyJams(false)}>
            Close
          </button>
          <video
            src={OnlyJamsVid}
            loop
            autoPlay
            muted
          ></video>
          <h4>Technologies Used: React, Ruby, Rails, PostgreSql, CSS</h4>
        </div>
      </div>
    )
}