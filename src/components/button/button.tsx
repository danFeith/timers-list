import React from "react";

interface IButtonProps {
    text: string;
    onClick: () => void
}

const Button = ({ text, onClick }: IButtonProps) => {
    return <button onClick={onClick}>{text}</button>
}

export default React.memo(Button);