import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTask, taskDelete, taskUpdate } from "../Store/task/taskAction";
import { Button } from "react-bootstrap";

const List = () => {
  const dispatch = useDispatch();
  const taskSelector = useSelector((state) => state.task.taskList);
  const loaderSelector = useSelector((state) => state.task.loader);
  const failureSelector = useSelector((state) => state.task.showErrorMsg);
  useEffect(() => {
    dispatch(getTask());
  }, []);
  console.log(taskSelector);
  const handleDelete = (id) => {
    dispatch(taskDelete(id));
  };
  const updateTask = (e) => {
    let task = { ...e, isCompleted: !e.isCompleted };
    dispatch(taskUpdate(task));
    console.log(task);
  };
  return (
    <>
      <div className="container mt-5">
        {loaderSelector && (
          <div
            className="spinner-border text-primary place-center"
            role="status"
          >
            <span className="visually-hidden "></span>
          </div>
        )}
        {failureSelector && <div className="Server down">Server down</div>}

        {taskSelector.length !== 0 ? (
          taskSelector.map((e, i) => (
            <ul className="list-group" key={i}>
              <li
                className={`${
                  e.isCompleted ? "task-completed" : "task-incomplete"
                } list-group-item d-flex justify-content-between align-items-center`}
                key={i}
              >
                {e.title}

                <div>
                  <Button
                    size="sm"
                    className="ml-2"
                    variant="outline-primary"
                    onClick={() => updateTask(e)}
                  >
                    <i
                      className={
                        !e.isCompleted ? "fas fa-check" : "fas fa-times"
                      }
                    ></i>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline-primary"
                    onClick={() => handleDelete(e.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </div>
              </li>
            </ul>
          ))
        ) : (
          <h1>Task List is Empty</h1>
        )}
      </div>
    </>
  );
};

export default List;
