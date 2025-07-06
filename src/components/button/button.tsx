import React from "react";

interface IButtonProps {
    text: string;
    onClick: () => void
}

export const Button = React.memo(({ text, onClick }: IButtonProps) => {
    return <button onClick={onClick}>{text}</button>
})

