import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";

const buttonVariants = cva("py-3 px-6 rounded-lg duration-300 font-medium text-center", {
  variants: {
    color: {
      teal: "bg-accent1 text-light hover:bg-accent1/90",
      ghost: "bg-transparent border text-accent1 hover:bg-white/70 shadow-xl font-semibold",
    },
  },
  defaultVariants: {
    color: "teal",
  },
});

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  target?: string;
  placeholder: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  target,
  placeholder,
  color,
}) => {
  return (
    <Link
      href={href}
      target={target}
      className={clsx(buttonVariants({ color }))}
    >
      {placeholder}
    </Link>
  );
};

export default Button;
