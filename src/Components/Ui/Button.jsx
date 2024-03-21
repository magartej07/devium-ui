import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center rounded-md justify-center whitespace-nowrap font-medium transition-colors duration-200 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-gray-900 text-white",
        outline: "bg-transparent text-gray-900 border border-gray-900 hover:bg-gray-100",
        distructive: "bg-red-500 text-white hover:bg-red-600",
        secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
        primary: "bg-transparent text-gray-900 hover:bg-gray-100",
      },
      size: {
        default: "h-10 px-3",
      },

    },
    defaultVariants: {
      variant: "default",
      size:"default",
    },
  }
);
const Button = (variant, size, children, ...props) => {
  return (
    <button
      className={clsx(
        buttonVariants({
          variant,
          size,
        })
      )}
    >
      {children}
    </button>
  );
};

// Button.prototype={
//     className:propsType
// }
export { Button, buttonVariants };
