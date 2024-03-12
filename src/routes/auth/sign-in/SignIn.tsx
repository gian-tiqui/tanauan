import { useContext, useEffect } from "react";
import { SetShowHeaderContext } from "../../../App";

const SignIn = () => {
  const setShowHeader = useContext(SetShowHeaderContext);

  useEffect(() => {
    setShowHeader(false);

    return () => {
      setShowHeader(true);
    };
  }, [setShowHeader]);

  return <div>sign in here</div>;
};

export default SignIn;
