export type todo = {
    title: string;
    id: number;
    isDone: boolean;
    details: string;
    dueDay: string;
    category: category;
};

export type formData = {
    title: string;
    details: string;
    dueDay: string;
    category: category;
};

export enum category {
    Study,
    Groceries,
    Fitness,
    Work,
    Housework,
    Appointment,
    Others,
}

export type TodoContextType = {
    todos: todo[];
    saveTodo: (formData: formData) => void;
    updateTodo: (id: number, formData: formData) => void;
    removeTodo: (id: number) => void;
    toggleTodo: (id: number, isDone: boolean) => void;
};

export enum FormType {
    EDIT,
    NEW,
}
