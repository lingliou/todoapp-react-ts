import { useState } from "react";
import { FormType, category, formData } from "../types/types";
import { enumToArray, isEmpty, stringToEnum } from "../utils/utils";
import { useTodoContext } from "../store/todosCtx";
import { useNavigate } from "react-router-dom";
import Btn from "./Btn";

const dynamicList = enumToArray(category);

const TodoForm: React.FC<{ type: FormType; id?: string }> = ({ type, id }) => {
    const [formData, setFormData] = useState<Partial<formData>>();

    const navigate = useNavigate();

    const { saveTodo, updateTodo, todos } = useTodoContext();
    const selectedTodo = todos.find((e) => e.id === +id!);

    const handleForm = (
        event:
            | React.FormEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [event.currentTarget.id]: event.currentTarget.value,
        });
    };

    const handleSubmit = (
        e: React.FormEvent,
        formData: formData | undefined
    ) => {
        e.preventDefault();
        if (type === FormType.NEW) {
            if (formData) {
                saveTodo(formData);
                navigate("/");
            }
        }
        if (type === FormType.EDIT) {
            if (formData) {
                updateTodo(Number(id), formData);
                navigate(`/id/${id}`);
            }
        }
    };
    return (
        <form onSubmit={(e) => handleSubmit(e, formData as formData)}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    className="todo-input"
                    type="text"
                    id="title"
                    onChange={handleForm}
                    value={formData?.title ?? selectedTodo?.title}
                />

                <label htmlFor="details">Details</label>
                <input
                    className="todo-input"
                    type="text"
                    id="details"
                    onChange={handleForm}
                    value={formData?.details ?? selectedTodo?.details}
                ></input>

                <label htmlFor="dueDay">Due Date/Time</label>
                <input
                    className="todo-input"
                    type="datetime-local"
                    id="dueDay"
                    onChange={handleForm}
                    value={formData?.dueDay ?? selectedTodo?.dueDay}
                ></input>

                <label htmlFor="category">Choose a Category:</label>
                <select
                    className="todo-input"
                    id="category"
                    name="category"
                    value={formData?.category ?? selectedTodo?.category}
                    onChange={handleForm}
                >
                    <option> --- Select Category ---</option>
                    {dynamicList.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>

            <Btn type="submit" disabled={isEmpty(formData)}>
                {type === FormType.EDIT ? "Save" : "Add To List"}
            </Btn>
        </form>
    );
};

export default TodoForm;
