export function MoodBoardItem({color,image,description}){
  return (
    <div className="mood-board-item" style={{backgroundColor:color}}>
      <img className="mood-board-image" src={image} alt={description} />
      <h3 className="mood-board-text">{description}</h3>
    </div>)
}

export function MoodBoard(){
  const moodBoards = [{color: 'green' , image:'https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg' , description:'Caribbean'},{color: 'lightblue' , image:'https://cdn.freecodecamp.org/curriculum/labs/shore.jpg' , description:'Gawadar Beach'
},{color: 'purple' , image:'https://cdn.freecodecamp.org/curriculum/labs/grass.jpg' , description:'Cape Town'}]

  return(
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        {moodBoards.map((moodBoard, index)=>(
          <MoodBoardItem key={moodBoard.description + index} {...moodBoard} />
        ))}
      </div>
    </div>)
}