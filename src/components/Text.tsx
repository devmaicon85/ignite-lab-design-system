import { Slot } from "@radix-ui/react-slot";

export interface TextProps {
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
    asChild?: boolean;
    className?: string;
}
export function Text({ size = "md", children, asChild, className }: TextProps) {
    const Comp = asChild ? Slot : "span";
    return (
        <Comp
            className={` text-gray-100 font-sans
            ${size === "sm" && "text-xs"} 
            ${size === "md" && "text-sm"} 
            ${size === "lg" && "text-md"} 
            ${className}
            `}
        >
            {children}
        </Comp>
    );
}
