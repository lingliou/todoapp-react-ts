import { Link, useParams } from "react-router-dom";
import { FormType } from "../types/types";

import TodoForm from "../components/TodoForm";
import { useTodoContext } from "../store/todosCtx";
import ErrorPage from "./ErrorPage";

const Edit: React.FC = () => {
    const { todos } = useTodoContext();
    let { id } = useParams();
    const selectedTodo = todos.find((todo) => todo.id === Number(id));
    if (selectedTodo) {
        return (
            <div className="todo-container">
                <h1> Edit task</h1>
                <TodoForm type={FormType.EDIT} id={id} />
                <Link to="/">Back to task</Link>
            </div>
        );
    } else {
        return (
            <ErrorPage>
                <h1>No Todo Item found!</h1>
            </ErrorPage>
        );
    }
};
export default Edit;
