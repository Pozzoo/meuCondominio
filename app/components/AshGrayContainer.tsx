import type {ReactNode} from "react";

interface AshGrayContainerProps {
    children?: ReactNode;
    className?: string;
}

const AshGrayContainer = ({ children, className }: AshGrayContainerProps) => {
    return (
        <div className={`flex flex-col drop-shadow-md bg-ash-grey rounded-2xl ${className}`}>
            {children}
        </div>
    );
};

export default AshGrayContainer;