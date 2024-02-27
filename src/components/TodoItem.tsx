import React from "react";
import { todo } from "../types/types";
import Btn from "./Btn";
import { Link } from "react-router-dom";
import { useTodoContext } from "../store/todosCtx";
const TodoItem: React.FC<todo> = ({ title, details, isDone, id }) => {
    const { removeTodo, toggleTodo } = useTodoContext();
    const handleDelete = () => {
        removeTodo(id);
    };

    return (
        <div className={`todo-item ${isDone && "completed"}`}>
            <label>
                <input
                    type="checkbox"
                    defaultChecked={isDone}
                    onChange={() => toggleTodo(id, !isDone)}
                />
                {title}
            </label>
            <p>{details}</p>
            {!isDone && (
                <>
                    <Link to={`/id/${id}`}>
                        <Btn>Details</Btn>
                    </Link>
                    <Btn onClick={handleDelete}>Delete</Btn>
                </>
            )}
        </div>
    );
};

export default TodoItem;
