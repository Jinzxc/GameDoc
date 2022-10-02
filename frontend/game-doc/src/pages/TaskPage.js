import * as React from "react";
import TaskCard from "../components/TaskCard";
import { useEffect, useState } from "react";
import Tasks from "../components/Tasks";
import { getAllTasks } from "../services/APIService";

const TaskPage = () => {
  const [tasks, updateTasks] = useState([]);

  useEffect(() => {
    try {
      getAllTasks().then((data) => {
        updateTasks(data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <div>
        {tasks.length ? (
          tasks.map((task) => <TaskCard key={task._id.$oid} task={task} />)
        ) : (
          <p className="pt-5 text-center">"No Tasks Found"</p>
        )}
      </div>
    </div>
  );
};

export default TaskPage;
