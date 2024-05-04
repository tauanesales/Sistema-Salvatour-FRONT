import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
  compact?: boolean;
  style?: React.CSSProperties;
};

export const Button = ({ variant, children, compact, onClick }: ButtonProps) => {

  const buttonStyle = {
    secondary: {
      background: '#EB5E55',
      color: '#333333',
    },
    primary: {
      background: '#0B4687',
      color: '#F9F9F9',
    },
  };

  const styleDoButton = {
    height: compact ? "30px" : "48px",
    ...buttonStyle[variant],
    border: 'none',
    cursor: 'pointer',
    padding: '5px 10px',
    borderRadius: '8px',
  };

  return (
    <button
      onClick={onClick}
      style={styleDoButton}
    >
      {children}
    </button>
  );
};
