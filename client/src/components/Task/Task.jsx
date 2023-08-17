import React from "react";
import "./task.css";
import { TaskIsNotComplete, Trash } from "../../assets";
import CountTask from "../CountTask/CountTask";

const Task = () => {
    return (
        <div className="tasks">
            <CountTask/>
            <div className="task">
                <img src={TaskIsNotComplete} alt="" />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Veniam et sequi soluta dicta, possimus iste? At, velit. Aut,
                    perferendis explicabo dicta ea iusto repellendus ut
                    mollitia, unde consequuntur, rem quod?
                </p>
                <button>
                    <img src={Trash} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Task;
