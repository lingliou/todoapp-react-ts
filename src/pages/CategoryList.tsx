import { todo } from "../types/types";
import TodoItem from "../components/TodoItem";
import { useTodoContext } from "../store/todosCtx";
import { Link, useParams } from "react-router-dom";
import { isEmpty, isInStringEnum } from "../utils/utils";
import ErrorPage from "./ErrorPage";

const CategoryList: React.FC = () => {
    const { todos } = useTodoContext();
    const { category } = useParams();
    if (!category || !isInStringEnum(category))
        return (
            <ErrorPage>
                <h1>No Category Found!</h1>
            </ErrorPage>
        );

    const categoryTodo = todos.filter((each) => {
        //@ts-ignore
        return each.category === category;
    });
    if (!isEmpty(categoryTodo)) {
        return (
            <div>
                <ul>
                    {categoryTodo.map((todo: todo) => (
                        <li key={todo.id}>
                            <TodoItem {...todo} />
                        </li>
                    ))}
                </ul>
                <Link to="/">Back to All Todo</Link>
            </div>
        );
    } else {
        return (
            <>
                <ErrorPage>
                    <h1> NO Todo Item Found In this category</h1>
                </ErrorPage>
            </>
        );
    }
};

export default CategoryList;
