import { Link } from "react-router-dom";
import { category } from "../types/types";
import { enumToArray } from "../utils/utils";

const AllCategory: React.FC = () => {
    const allCategory = enumToArray(category);
    return (
        <div>
            <h1> Browse All Category</h1>
            <ul className="category-list">
                {allCategory.map((each, idx) => {
                    return (
                        <Link key={idx} to={`/category/${each}`}>
                            {each}
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};

export default AllCategory;
