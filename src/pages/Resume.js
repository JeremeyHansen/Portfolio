import Typewriter from "typewriter-effect";

export default function Resume() {
  return (
    <div className="typewriter-container">
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString("Resume").start();
        }}
      />
    </div>
  );
}