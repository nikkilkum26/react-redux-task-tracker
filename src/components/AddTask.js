import React, { useState, useEffect } from "react";
import "./AddTask.css";
import { useDispatch } from "react-redux";
import { addTask } from "../Store/task/taskAction";
import { Modal, Button, Col, Form } from "react-bootstrap";

const AddTask = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({ isCompleted: false });

  const handleClose = () => {
    setShow(false);
    setValues({ isCompleted: false });
  };
  const handleShow = () => setShow(true);
  useEffect(() => {
    console.log(values);
  }, [values]);
  const submitTask = async () => {
    try {
      await dispatch(addTask(values));
      setValues({ isCompleted: false });
      setShow(false);
    } catch (error) {}
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <Button variant="primary" onClick={handleShow}>
          <i class="fas fa-plus"> Add task</i>
        </Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="custom__container">
            <label>Task Name</label>
            <input
              type="text"
              placeholder="Enter task name"
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              value={values?.title}
            />
          </div>
          <div className="custom__container mt-2">
            <Form.Check
              type="radio"
              label="Completed"
              name="taskstatus"
              id="completed"
              onChange={(e) => setValues({ ...values, isCompleted: true })}
            />
            <Form.Check
              type="radio"
              label="Pending"
              name="taskstatus"
              id="pending"
              onChange={(e) => setValues({ ...values, isCompleted: false })}
              defaultChecked
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => submitTask()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddTask;
