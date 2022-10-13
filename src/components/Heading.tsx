import { Slot } from "@radix-ui/react-slot";

export interface HeadingProps {
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
    asChild?: boolean;
    className?:string;
}
export function Heading({ size = "md", children, asChild, className }: HeadingProps) {
    const Comp = asChild ? Slot : "h2";
    return (
        <Comp
            className={` text-gray-100 font-sans font-bold
            ${size === "sm" && "text-lg"} 
            ${size === "md" && "text-xl"} 
            ${size === "lg" && "text-2xl"} 
            ${className}
            `}
        >
            {children}
        </Comp>
    );
}
