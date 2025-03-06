import React from "react";

interface IButtonProps {
  text: string;
  variant: "primary" | "primaryOutline" | "secondary";
  fullWidth?: boolean;
}

export const GcButton: React.FC<IButtonProps> = ({
  text,
  variant,
  fullWidth,
}) => {
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
      className={`${classVariant} ${
        fullWidth ? "w-full" : "w-fit"
      } rounded-lg font-semibold text-white text-sm leading-[1.5rem] px-8 md:text-base py-4 md:px-14`}
    >
      {text}
    </button>
  );
};
