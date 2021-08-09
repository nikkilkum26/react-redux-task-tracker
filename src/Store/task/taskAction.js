import axios from "axios";
import * as taskActionType from "./taskActionTypes";
import { toast } from "react-toastify";
export const getTask = () => async (dispatch) => {
  try {
    dispatch({
      type: taskActionType.GET_TASK_BEGINS,
      payload: true,
    });
    const getData = await axios.get("http://localhost:4000/tasks");
    dispatch({
      type: taskActionType.GET_TASK_SUCCESS,
      payload: getData.data,
    });
  } catch (error) {
    dispatch({
      type: taskActionType.GET_TASK_FAILURE,
      payload: false,
    });
    toast.error(error.message);
  }
};
export const addTask = (task) => async (dispatch) => {
  console.log(task);
  try {
    dispatch({
      type: taskActionType.ADD_TASK_BEGINS,
      payload: true,
    });
    const getData = await axios.post("http://localhost:4000/tasks", task);
    dispatch({
      type: taskActionType.ADD_TASK_SUCCESS,
      payload: getData.data,
    });
    toast.success("Task added !");
  } catch (error) {
    console.log(error);
    dispatch({
      type: taskActionType.ADD_TASK_FAILURE,
      payload: false,
    });
    toast.error(error.message);
  }
};
export const taskDelete = (id) => async (dispatch) => {
  try {
    dispatch({
      type: taskActionType.DELETE_TASK_BEGINS,
    });

    await axios.delete(`http://localhost:4000/tasks/${id}`);
    dispatch({
      type: taskActionType.DELETE_TASK_SUCCESS,
      payload: id,
    });
    toast.success("Task Deleted !");
  } catch (error) {
    console.log(error);
    dispatch({
      type: taskActionType.DELETE_TASK_FAILURE,
    });
    toast.error(error.message);
  }
};
export const taskUpdate = (task) => async (dispatch) => {
  try {
    dispatch({
      type: taskActionType.UPDATE_TASK_BEGINS,
    });

    await axios.put(`http://localhost:4000/tasks/${task.id}`, task);

    dispatch({
      type: taskActionType.UPDATE_TASK_SUCCESS,
      payload: task,
    });
    toast.success("Task updated !");
  } catch (error) {
    console.log(error);
    dispatch({
      type: taskActionType.UPDATE_TASK_FAILURE,
    });
    toast.error(error.message);
  }
};
