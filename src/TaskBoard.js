import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddNewTaskModal from "./Modal/AddNewTaskModal";
import ManImg from "../src/Images/man3.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import { GrAddCircle, GrFormAdd } from "react-icons/gr";
import { BsAlignMiddle } from "react-icons/bs";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { CgMathEqual } from "react-icons/cg";
import { IoIosArrowUp } from "react-icons/io";
import Cookies from "js-cookie";
import {
  MdKeyboardDoubleArrowUp,
  MdKeyboardDoubleArrowDown,
} from "react-icons/md";
import moment from "moment";
import { toast } from "react-toastify";

const TaskBoard = () => {
  // let TaskData = JSON.parse(localStorage.getItem("tasks"));
  let LocalStorageData = JSON.parse(localStorage.getItem("tasks"));
  let SessionStorageData = JSON.parse(sessionStorage.getItem("tasks"));
  const [CookiesData, setCookiesData] = useState();

  // const [taskListNew, setTaskListNew] = useState(TaskData);
  const [LocalData, setLocalData] = useState(LocalStorageData);
  const [SessionData, setSessionData] = useState(SessionStorageData);

  const [Type, setType] = useState();
  const [TaskIDData, setTaskIDData] = useState();
  const [AddTaskModalShow, setAddTaskModalShow] = useState(false);

  function Icons(icon) {
    if (icon === "Low") {
      return (
        <span className="low">
          <MdKeyboardDoubleArrowDown />
        </span>
      );
    } else if (icon === "High") {
      return (
        <span className="high">
          <IoIosArrowUp />
        </span>
      );
    } else if (icon === "Normal") {
      return (
        <span className="Normal">
          <CgMathEqual />
        </span>
      );
    } else if (icon === "Highest") {
      return (
        <span className="Highest">
          <MdKeyboardDoubleArrowUp />
        </span>
      );
    } else if (icon === undefined && icon === null && icon === "") {
      return "";
    }
  }

  function fnAddEditTaskbtn(e, t, typeValue) {
    setType(typeValue);
    setAddTaskModalShow(true);
    setTaskIDData(t);
  }

  useEffect(() => {
    if (Cookies.get("tasks") !== undefined) {
      let CookiesStorageData = JSON.parse(Cookies.get("tasks"));
      setCookiesData(CookiesStorageData);
    }
  }, []);

  let ggg = Cookies.get("tasks");

  useEffect(() => {
    setTimeout(() => {
      localStorage.clear();
      sessionStorage.clear();
      setLocalData();
      setSessionData();

      if (Cookies.get("tasks") !== undefined) {
        setCookiesData("");
        Cookies.remove("tasks");
      }
    }, 120000);
  }, [LocalStorageData, SessionStorageData, ggg]);

  return (
    <>
      <div>
        <Container>
          <div className="d-flex">
            <span className="m-0 blink">Add Data from Plus Button...</span>
            <div className="arrow-container">
              <div className="arrow-down"></div>
            </div>
          </div>
          <div className="board-items">
            <div className="board-item">
              <div className="task-header not-started-col justify-content-between">
                <span className="task-number">
                  Local Storage
                  <span className="ps-2">{LocalData?.length}</span>
                </span>
                <span
                  onClick={(e) => fnAddEditTaskbtn(e, null, "LocalStorage")}
                  className="task-number"
                >
                  {/* <GrFormAdd */}
                  <GrAddCircle
                    style={{ color: "#fff", height: "28px", width: "28px" }}
                  />
                </span>
              </div>
              <div className="table-section-col">
                <div className="board-hight">
                  {/* {tasks.LocalStorage} */}
                  {LocalData?.length > 0 &&
                    LocalData?.map((s_item, s_index) => (
                      <div
                        key={s_item.title}
                        // onDragStart={(e) => onDragStart(e, t.id)}
                        // draggable
                        className="draggable-box"
                      >
                        {/* <div className="draggable-box-board-title">ID : {t.id}</div> */}
                        <div className="d-flex justify-content-between">
                          <div className="draggable-box-board-title pb-2">
                            {s_item.title}
                          </div>
                        </div>
                        <div className="card-fooot align-items-center justify-content-between d-flex">
                          <div className="draggable-box-description time-format">
                            {moment(s_item.createdOn).fromNow()}
                          </div>
                          <div className="draggable-box-description">
                            <span className="prio-icon">
                              {Icons(s_item.priority)}
                            </span>
                            <img src={ManImg} />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="board-item">
              <div className="task-header not-started-col justify-content-between">
                <span className="task-number">
                  Session Storage
                  <span className="ps-2">{SessionData?.length}</span>
                </span>
                <span
                  onClick={(e) => fnAddEditTaskbtn(e, null, "SessionStorage")}
                  className="task-number"
                >
                  {/* <GrFormAdd */}
                  <GrAddCircle
                    style={{ color: "#fff", height: "28px", width: "28px" }}
                  />
                </span>
              </div>
              <div className="table-section-col">
                <div className="board-hight">
                  {/* {tasks.SessionStorage} */}
                  {SessionData?.length > 0 &&
                    SessionData?.map((s_item, s_index) => (
                      <div
                        key={s_item.title}
                        // onDragStart={(e) => onDragStart(e, t.id)}
                        // draggable
                        className="draggable-box"
                      >
                        {/* <div className="draggable-box-board-title">ID : {t.id}</div> */}
                        <div className="d-flex justify-content-between">
                          <div className="draggable-box-board-title pb-2">
                            {s_item.title}
                          </div>
                        </div>
                        <div className="card-fooot align-items-center justify-content-between d-flex">
                          <div className="draggable-box-description time-format">
                            {moment(s_item.createdOn).fromNow()}
                          </div>
                          <div className="draggable-box-description">
                            <span className="prio-icon">
                              {Icons(s_item.priority)}
                            </span>
                            <img src={ManImg} />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="board-item">
              <div className="task-header not-started-col justify-content-between">
                <span className="task-number">
                  Cookies
                  <span className="ps-2">{CookiesData?.length}</span>
                </span>
                <span
                  onClick={(e) => fnAddEditTaskbtn(e, null, "Cookies")}
                  className="task-number"
                >
                  {/* <GrFormAdd */}
                  <GrAddCircle
                    style={{ color: "#fff", height: "28px", width: "28px" }}
                  />
                </span>

                {/* <span className="task-number">{tasks.Cookies.length}</span> */}
              </div>
              <div className="table-section-col">
                <div className="board-hight">
                  {/* {tasks.Cookies} */}{" "}
                  {CookiesData?.length > 0 &&
                    CookiesData?.map((s_item, s_index) => (
                      <div
                        key={s_item.title}
                        // onDragStart={(e) => onDragStart(e, t.id)}
                        // draggable
                        className="draggable-box"
                      >
                        {/* <div className="draggable-box-board-title">ID : {t.id}</div> */}
                        <div className="d-flex justify-content-between">
                          <div className="draggable-box-board-title pb-2">
                            {s_item.title}
                          </div>
                          {/* <Dropdown>
                            <Dropdown.Toggle
                              variant=""
                              id="dropdown-basic"
                            ></Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item
                                onClick={(e) => fnAddEditTaskbtn(e, t)}
                              >
                                <AiFillEdit className="me-3 edit" /> Edit
                              </Dropdown.Item>
                              <Dropdown.Item onClick={(e) => fnDelete(s_item.id)}>
                                <AiFillDelete className="me-3 delete" />
                                Delete
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown> */}
                        </div>
                        <div className="card-fooot align-items-center justify-content-between d-flex">
                          <div className="draggable-box-description time-format">
                            {moment(s_item.createdOn).fromNow()}
                          </div>
                          <div className="draggable-box-description">
                            <span className="prio-icon">
                              {Icons(s_item.priority)}
                            </span>
                            <img src={ManImg} />
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            {/* <div
              className="board-item"
              onDragOver={(e) => onDragOver(e)}
              onDrop={(e) => onDrop(e, "Done")}
            >
              <div className="task-header not-started-col justify-content-between">
                <span className="task-number">
                  DONE
                  <span className="ps-2">{tasks.Done.length}</span>
                </span>
              </div>
              <div className="table-section-col">
                <div className="board-hight">{tasks.Done}</div>
              </div>
            </div> */}
          </div>
        </Container>
      </div>
      {AddTaskModalShow && (
        <AddNewTaskModal
          show={AddTaskModalShow}
          // TaskData={TaskIDData}
          // bindList={setTaskListNew}
          setLocalData={setLocalData}
          setSessionData={setSessionData}
          setCookiesData={setCookiesData}
          // setCookiesData={setCookiesData}
          Type={Type}
          // UserID={UserID}
          //   Userdata={Userdata}
          onHide={() => setAddTaskModalShow(false)}
        />
      )}
    </>
  );
};

export default TaskBoard;
