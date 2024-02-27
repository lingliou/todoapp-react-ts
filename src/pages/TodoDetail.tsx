import { Link, useParams } from "react-router-dom";
import Btn from "../components/Btn";
import { useTodoContext } from "../store/todosCtx";
import { convertToDisplayDateFormat } from "../utils/utils";
import ErrorPage from "./ErrorPage";
const TodoDetail: React.FC = () => {
    const { todos, removeTodo } = useTodoContext();
    let { id } = useParams();
    let selectedTodo;
    if (id) {
        selectedTodo = todos.find((e) => e.id === +id!);
    } else {
        throw Error("No id from router");
    }
    if (selectedTodo) {
        const { isDone, title, dueDay, details, category } = selectedTodo;
        return (
            <div className="todo-detail">
                <div>
                    <h1> {title}</h1>
                    <p>Details: {details}</p>
                    <p>
                        Category:{" "}
                        <Link to={`/category/${category}`}>{category}</Link>{" "}
                    </p>
                    <p> Due Date: {convertToDisplayDateFormat(dueDay)}</p>
                    <p>Status: {isDone ? "Done" : "Pending"}</p>
                </div>

                <div>
                    <Link to={`/edit/${id}`}>
                        <Btn>Edit</Btn>
                    </Link>
                    <Btn onClick={() => removeTodo(Number(id))}>Delete</Btn>
                </div>

                <div>
                    <Link to="/">Back to Todo list</Link>
                </div>
            </div>
        );
    } else {
        return (
            <ErrorPage>
                <h1>No Todo Detail Found!</h1>
            </ErrorPage>
        );
    }
};

export default TodoDetail;
