import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[1.1em] [&_svg]:shrink-0 active:scale-[0.97]",
  {
    variants: {
      variant: {
        // Fire-gradient primary CTA
        primary:
          "bg-fire-animated text-white shadow-[0_10px_30px_-8px_rgba(255,107,0,0.55)] hover:shadow-[0_16px_40px_-8px_rgba(255,107,0,0.8)] hover:-translate-y-0.5",
        solid:
          "bg-primary text-white hover:bg-primary-600 hover:-translate-y-0.5",
        outline:
          "border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:border-secondary hover:bg-white/10 hover:-translate-y-0.5",
        ghost: "text-white/80 hover:text-white hover:bg-white/5",
        whatsapp:
          "bg-[#25D366] text-black font-bold hover:bg-[#1ebe5d] hover:-translate-y-0.5",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6",
        lg: "h-14 px-8 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // When `asChild` is set, render the single child element (e.g. an <a>)
    // with the button styles merged in — avoids invalid <button><a> nesting.
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
