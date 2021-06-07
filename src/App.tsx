import { hot } from "react-hot-loader/root";
import React, { useEffect } from "react";
import styles from "App.module.css";
import imgtest from "assets/logo_2020.png";
import { TIMEOUT } from "@api/rest";
function App(): JSX.Element {
  useEffect(() => {
    console.log(TIMEOUT);
  }, []);
  return (
    <div className={styles.test}>
      <div>
        <img src={imgtest} height={300} />
      </div>
      <div>Hello, World!</div>
    </div>
  );
}

export default hot(App);
