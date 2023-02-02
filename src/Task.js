export const Task = (props)=>{
    return( 
      <div>
        <div className="tsk" style={{ borderLeft: props.completed ? "5px solid green" : "5px solid black" }}>
          <div>
          <p>{props.taskName}</p>
          </div>
          <div className="btn-g">
          <button className='btn-success fa-solid fa-check' onClick={()=> props.completeTask(props.id)}></button>
    
          <button className='btn-danger fa-solid fa-xmark' onClick={()=> props.deleteTask(props.id)}></button>
          </div>
      
        </div>
        </div>

        );
}