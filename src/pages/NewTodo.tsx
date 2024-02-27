import { FormType } from "../types/types";

import TodoForm from "../components/TodoForm";

const NewTodo: React.FC = () => {
    return (
        <div className="todo-container">
            <h1> What to do</h1>
            <TodoForm type={FormType.NEW} />
        </div>
    );
};
export default NewTodo;
