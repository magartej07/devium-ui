import { Link } from "react-router-dom";
import Logo from "../Common/Logo";
import { buttonVariants } from "../Ui/Button";

const Navbar = () => {
  return (
    <header className="border-b h-16">
      <div className="container flex justify-between items-center h-full">
        <Logo className="h-12 w-12" />
        <nav>
          <ul className="flex items-center h-full gap-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link
                to="/auth/register"
                className={buttonVariants({
                  variant:"default",
                })}
              >
                Register
              </Link>
            </li>
            <li>
              <Link to="/auth/login" className={buttonVariants({
                  variant:"outline",
                })}>Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
