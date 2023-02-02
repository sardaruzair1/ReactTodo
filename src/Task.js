export const Task = (props)=>{
    return( 
      <div>
        <div className="tsk" style={{ borderLeft: props.completed ? "5px solid green" : "5px solid black" }}>
          <div>
          <p>{props.taskName}</p>
          </div>
          <div className="btn-g">
          
          <button className='btn-success' onClick={()=> props.completeTask(props.id)}>/</button>
          <button className='btn-danger' onClick={()=> props.deleteTask(props.id)}>X</button>
          </div>
      
        </div>
        </div>

        );
}