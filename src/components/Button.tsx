import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps {
    children: React.ReactNode;
    asChild?: boolean;
}
export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : "button";
    return (
        <Comp
            className={`py-4 px-3 bg-cyan-500  transition-all rounded font-semibold text-sm w-full max-w-md hover:bg-cyan-300 cursor-pointer focus:ring-2 ring-white`}
        >
            {children}
        </Comp>
    );
}
