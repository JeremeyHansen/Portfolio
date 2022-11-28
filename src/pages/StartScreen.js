import "../css/startscreen.css"

export default function StartScreen({ className }){
    return (
        (className === "startscreen" ? (
        <div className={className}>
               <h1 className="start-title-lit">{"{"} JH {"}"}</h1>
               <div className="progress-bar" data-label="Loading..."></div>
        </div>) : "")
    )
}