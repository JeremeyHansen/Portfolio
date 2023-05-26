import BassBuddyVid from "../BassBuddyVid.mp4";

export default function BassBuddy() {
  return (
    <>
      <h1 className="port-title">BASS BUDDY.</h1>
      <div className="port-video">
        <div>
        <p className="bb-text">
          An end to end responsive application built and designed to give user's
          a fun experience to find local EDM concerts in their respective
          cities. User's have the ability to search through the database and
          find shows on the map within their city.
        </p>
        <button className="bb-button">
          <a href="https://bassbuddy.xyz">bassbuddy.xyz</a></button>
        </div>
        <video src={BassBuddyVid} loop autoPlay muted></video>
      </div>
    </>
  );
}
