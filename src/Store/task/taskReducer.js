import * as taskActionTypes from "./taskActionTypes";

const initialTaskState = {
  taskList: [],
  loader: false,
  taskLoader: false,
  deleteTaskLoading: false,
  updateTaskLoading: false,
};
const taskReducer = (state = initialTaskState, { type, payload }) => {
  switch (type) {
    case taskActionTypes.GET_TASK_BEGINS:
      return {
        ...state,
        loader: payload,
      };
    case taskActionTypes.GET_TASK_SUCCESS:
      return {
        ...state,
        taskList: payload,
        loader: false,
      };
    case taskActionTypes.GET_TASK_FAILURE:
      return {
        ...state,
        loader: payload,
        showErrorMsg: true,
      };
    case taskActionTypes.ADD_TASK_BEGINS:
      return {
        ...state,
        taskLoader: payload,
      };
    case taskActionTypes.ADD_TASK_SUCCESS:
      return {
        ...state,
        taskList: [...state.taskList, payload],
        taskLoader: false,
      };
    case taskActionTypes.ADD_TASK_FAILURE:
      return {
        ...state,
        taskLoader: payload,
        showErrorMsg: true,
      };
    case taskActionTypes.DELETE_TASK_BEGINS:
      return {
        ...state,
        deleteTaskLoading: true,
      };
    case taskActionTypes.DELETE_TASK_SUCCESS:
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== payload),
        deleteTaskLoading: false,
      };
    case taskActionTypes.DELETE_TASK_FAILURE:
      return {
        ...state,
        deleteTaskLoading: false,
        showErrorMsg: true,
      };
    case taskActionTypes.UPDATE_TASK_BEGINS:
      return {
        ...state,
        updateTaskLoading: true,
      };
    case taskActionTypes.UPDATE_TASK_SUCCESS:
      return {
        ...state,
        taskList: state.taskList.map((task) =>
          task.id === payload.id ? payload : task
        ),
        updateTaskLoading: false,
      };
    case taskActionTypes.UPDATE_TASK_FAILURE:
      return {
        ...state,
        updateTaskLoading: false,
        showErrorMsg: true,
      };

    default:
      return state;
  }
};
export default taskReducer;
