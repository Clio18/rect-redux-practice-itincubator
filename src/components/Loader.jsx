import preloader from "../../src/assets/images/preloader.svg";
import classes from "./Loader.module.css";

let Loader = () => {
  return (
    <div className={classes.container}>
      <img src={preloader} alt="fetching..." />
    </div>
  );
};

export default Loader;
