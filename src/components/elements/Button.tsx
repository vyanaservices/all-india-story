import React, { ElementType, ReactNode } from "react";

interface ButtonProps {
  as?: ElementType;
  className?: string;
  variant?: string;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  [key: string]: any; // Allows other props like onClick, etc.
}

export default function Button({
  as: Component = "button",
  className = "",
  variant = "orange",
  size = "sm",
  children,
  leftIcon = null,
  rightIcon = null,
  disabled = false,
  ...props
}: ButtonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "orange":
        return `border-2 text-bg1 border-bg1 hover:bg-bg1 hover:text-white ${disabled ? "bg-bg1/80 cursor-not-allowed" : ""}`;
      case "green":
        return "bg-green-500 text-white hover:bg-green-500/80";
      case "orange-gradient":
        return "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-500";
      case "white":
        return "bg-white text-black hover:bg-gray-100/80 border border-gray-300";
      default:
        return "";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "md":
        return "px-6 py-3 gap-x-2 text-base";
      case "sm":
        return "px-4 py-2 gap-x-1 text-sm";
      case "lg":
        return "px-8 py-4 gap-x-2 text-lg";
      default:
        return "";
    }
  };

  return (
    <Component
      className={`${className} ${getVariantClasses()} ${getSizeClasses()} flex items-center justify-center text-nowrap text-center capitalize transition-all duration-100 active:scale-90`}
      {...props}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </Component>
  );
}
