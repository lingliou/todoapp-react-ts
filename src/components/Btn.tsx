import "./Btn.css";

interface CustomButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}
const Btn: React.FC<CustomButtonProps> = ({
    children,
    className,
    disabled,
    ...props
}) => {
    return (
        <button
            className={`custom-button ${className} ${disabled && "disabled"}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Btn;
