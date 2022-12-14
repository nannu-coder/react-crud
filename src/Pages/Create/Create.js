import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useUsers from "../../hook/contexthook";
import "./Create.css";

const Create = () => {
  const [users, setUsers] = useUsers();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");

  const updateId = (e) => {
    setId(e.target.value);
    console.log(id);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePosition = (e) => {
    setPosition(e.target.value);
  };

  const updateSalary = (e) => {
    setSalary(e.target.value);
  };

  const addUser = (e) => {
    e.preventDefault();
    setUsers([
      ...users,
      { id: id, name: name, position: position, salary: salary },
    ]);

    alert("created successfull");
  };
  return (
    <div className="create">
      <Form onSubmit={addUser}>
        <Form.Group>
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={id}
            onChange={updateId}
            placeholder="Enter ID"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={name}
            onChange={updateName}
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Position</Form.Label>
          <Form.Control
            type="text"
            name="position"
            value={position}
            onChange={updatePosition}
            placeholder="Enter Position"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            name="salary"
            value={salary}
            onChange={updateSalary}
            placeholder="Enter Salary"
          />
        </Form.Group>
        <Button className="action_btn mt-4" variant="primary" type="submit">
          Create User
        </Button>
        <Link to="/">
          <Button className="action_btn mt-4" variant="info">
            Back to Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Create;
