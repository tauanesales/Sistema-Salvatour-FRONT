import React from "react";
import '../../styles/global.css'

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  compact?: boolean;
  style?: React.CSSProperties;
}

export const Button = ({
  children,
  compact,
  onClick,
}: ButtonProps) => {

  const styleDoButton = {
    height: compact ? "30px" : "48px",
    border: "none",
    cursor: "pointer",
  };

  return (
    <button onClick={onClick} style={styleDoButton} className="button">
      {children}
    </button>
  );
};
