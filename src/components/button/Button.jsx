import cn from "classnames";
import styles from "./button.module.css";

const Button = ({
  children,
  small = false,
  green = false,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(styles.button, className, {
        [styles.small]: small,
        [styles.green]: green,
      })}
      {...rest}
    >
      {children}
    </div>
  );
};
export default Button;
