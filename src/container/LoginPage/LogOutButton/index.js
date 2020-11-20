import React, { useCallback, useState } from "react";
import LogOutComponent from "../../../components/LoginPage/LogOutButton";

import firebase from "../../../firebase";
import { useHistory } from "react-router-dom";

const LogOutContainer = () => {
  const [error, setError] = useState(false);

  const { push } = useHistory();

  const onClickHandler = useCallback(async () => {
    try {
      await firebase.auth().signOut();
      push("/");
    } catch (error) {
      console.error(error);
      setError(error);
    }
  }, [push]);

  console.log(error);
  return (
    <LogOutComponent
      {...{
        onClickHandler
      }}
    />
  );
};

export default LogOutContainer;
