import {
    createContext,
    useContext,
    useState,
    useEffect,
    PropsWithChildren,
} from "react";
import { formData, todo, TodoContextType } from "../types/types";

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const ContextProvider = ({ children }: PropsWithChildren<{}>) => {
    const [todos, setTodos] = useState<todo[] | []>([]);
    useEffect(() => {
        const storedTodosString = localStorage.getItem("todos");
        const initialTodos = storedTodosString
            ? JSON.parse(storedTodosString)
            : [];
        setTodos(initialTodos);
    }, []);

    const saveTodo = (formData: formData) => {
        const newTodo: todo = {
            id: todos.length + 1,
            title: formData.title,
            details: formData.details,
            isDone: false,
            dueDay: formData.dueDay,
            category: formData.category,
        };
        localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
        setTodos([...todos, newTodo]);
    };

    const updateTodo = (id: number, formData: formData) => {
        const newTodos = todos.map((e) => {
            return e.id === id ? { ...e, ...formData } : e;
        });
        localStorage.setItem("todos", JSON.stringify(newTodos));
        setTodos(newTodos);
    };

    const toggleTodo = (id: number, newIsDone: boolean) => {
        const newTodos = todos.map((e) => {
            return e.id === id ? { ...e, isDone: newIsDone } : e;
        });
        localStorage.setItem("todos", JSON.stringify(newTodos));
        setTodos(newTodos);
    };

    const removeTodo = (id: number) => {
        const newTodos = todos.filter((e) => e.id !== id);
        localStorage.setItem("todos", JSON.stringify(newTodos));
        setTodos(newTodos);
    };

    return (
        <TodoContext.Provider
            value={{
                todos: todos,
                saveTodo,
                updateTodo,
                removeTodo,
                toggleTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export const useTodoContext = () => {
    return useContext(TodoContext) as TodoContextType;
};
