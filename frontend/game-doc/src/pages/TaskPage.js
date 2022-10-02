import * as React from "react";
import TaskCard from "../components/TaskCard";
import { useEffect, useState } from "react";
import { getAllTasks } from "../services/APIService";

const TaskPage = () => {
  const [tasks, updateTasks] = useState([
    {_id:{$oid: 123456}, id: 1, title:"Test1", description:"Numero uno", ids:[1,2,3]},
    {_id:{$oid: 123656}, id: 2, title:"Test2", description:"Numero dos", ids:[4,5,6]},
    {_id:{$oid: 125456}, id: 3, title:"Test3", description:"Numero tres", ids:[7,8,9]}
  ]);

  // useEffect(() => {
  //   try {
  //     getAllTasks().then((data) => {
  //       updateTasks(data.data);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

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
