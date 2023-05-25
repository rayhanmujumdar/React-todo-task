import React, { useEffect, useState } from "react";
import checkStatus from "../utils/checkStatus";
import { useDispatch, useSelector } from "react-redux";
import { todoAdded } from "../feature/problem1/todos/todoSlice";
import { toggleList } from "../feature/problem1/filter/filterSlice";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const statusList = useSelector((state) => state.filter.status);
  const handleClick = (val) => {
    setShow(val);
  };
  useEffect(() => {
    dispatch(toggleList(show));
  }, [show]);
  const handleTask = (e) => {
    e.preventDefault();
    const check = checkStatus(status);
    if (check) {
      setError("");
      dispatch(todoAdded({ task, status }));
      reset();
    } else {
      setError("Status are must be ACTIVE or COMPLETED");
    }
  };
  const reset = () => {
    setTask("");
    setStatus("");
    setError("");
  };
  let content = todos
    .filter((todo) => {
      if (todo.status === statusList) {
        return todo;
      } else if (statusList === "all") {
        return todo;
      }
    })
    .map((todo, index) => (
      <tr key={index}>
        <td>{todo.task}</td>
        <td>{todo.status}</td>
      </tr>
    ));
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleTask}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
          {error && <p style={{ fontSize: "16px", color: "red" }}>{error}</p>}
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>{content}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
