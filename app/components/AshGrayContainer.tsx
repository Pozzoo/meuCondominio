import type {ReactNode} from "react";

interface AshGrayContainerProps {
    children?: ReactNode;
    className?: string;
}

const AshGrayContainer = ({ children, className }: AshGrayContainerProps) => {
    return (
        <div className={`flex flex-col drop-shadow-md pr-6 pl-6 pt-2.5 pb-2.5 bg-ash-grey rounded-2xl ${className}`}>
            {children}
        </div>
    );
};

export default AshGrayContainer;