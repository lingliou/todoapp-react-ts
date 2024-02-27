import { Link } from "react-router-dom";

const ErrorPage: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            {children || <h1>{"404! No Page Found!"}</h1>}
            <Link to="/">Back To Todo List</Link>
        </div>
    );
};

export default ErrorPage;
