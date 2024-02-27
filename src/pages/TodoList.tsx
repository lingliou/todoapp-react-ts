import { todo } from "../types/types";
import TodoItem from "../components/TodoItem";
import { useTodoContext } from "../store/todosCtx";
import Btn from "../components/Btn";
import { Link } from "react-router-dom";

const TodoList: React.FC = () => {
    const { todos } = useTodoContext();
    return (
        <div className="todo-container">
            <ul>
                {todos.map((todo: todo) => (
                    <li key={todo.id}>
                        <TodoItem {...todo} />
                    </li>
                ))}
            </ul>
            <Link to="/new">
                <Btn> Add New Task</Btn>
            </Link>
        </div>
    );
};

export default TodoList;
