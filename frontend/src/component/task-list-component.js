import ShowTaskListComponent from "./show-task-list-component";
import { useState } from "react";


export default function TaskListComponent(){
    const [showCompletedTaskList, setShowCompletedTaskList] = useState('incomplete');

    function changeListView(buttonClicked){
        setShowCompletedTaskList(buttonClicked);
    }

    return(
        <>
            <div className="">
                <button className="btn btn-primary">Add task</button>
                <div className="my-5 tab-list">
                    <span onClick={()=> changeListView('completed')}
                    className={showCompletedTaskList==='completed'? 'active' : ''}
                    >Completed</span>
                    <span onClick={()=> changeListView('incomplete')}
                    className={showCompletedTaskList==='incomplete'? 'active' : ''}
                    >Incomplete</span>
                </div>
                <ShowTaskListComponent showList={showCompletedTaskList}/>
            </div>
        </>
    )
}