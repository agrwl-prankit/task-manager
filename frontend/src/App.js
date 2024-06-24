import React from 'react';
import './App.css';
import TaskListComponent from './component/task-list-component';

export const BASE_URL = 'http://127.0.0.1:8000/api/';


function App() {
  return (
    <main className="content">
        <h1 className="text-black text-uppercase text-center my-4">Task Manager</h1>
        <div className="row ">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <TaskListComponent />
            </div>
          </div>
        </div>
    </main>
  );
}

export default App;
