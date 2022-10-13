import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}
export function Button({
    children,
    asChild,
    className,
    ...props
}: ButtonProps) {
    const Comp = asChild ? Slot : "button";
    return (
        <Comp
            className={`${className} py-3 px-4 text-black bg-cyan-500  transition-all rounded font-semibold text-sm w-full max-w-md hover:bg-cyan-300 cursor-pointer focus:ring-2 ring-white`}
            {...props}
        >
            {children}
        </Comp>
    );
}
