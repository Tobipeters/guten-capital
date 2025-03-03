import React from "react";

interface IButtonProps {
  text: string;
  variant: "primary" | "primaryOutline" | "secondary";
}

export const GcButton: React.FC<IButtonProps> = ({ text, variant }) => {
  const classVariant =
    variant === "primary"
      ? "bg-gc_primary_500"
      : variant === "primaryOutline"
      ? "bg-transparent border border-gc_secondary_500"
      : variant === "secondary"
      ? "bg-gc_grey_800"
      : "";

  return (
    <button
      className={`${classVariant} rounded-lg font-semibold text-white text-sm md:leading-[1.5rem] px-8 md:text-base md:py-4 md:px-14`}
    >
      {text}
    </button>
  );
};
