import cn from "classnames";
import styles from "./button.module.css";
import {useTheme} from "../../contexts/theme-context/use-theme.jsx";

const Button = ({
  children,
  small = false,
  green = false,
  className,
  ...rest
}) => {
  const {theme} = useTheme();

  return (
    <div
      className={cn(styles.button, className, {
        [styles.small]: small,
        [styles.green]: green,
        [styles.theme]: !!theme,
      })}
      {...rest}
    >
      {children}
    </div>
  );
};
export default Button;
