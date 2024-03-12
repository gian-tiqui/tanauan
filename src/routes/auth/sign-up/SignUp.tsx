import { useContext, useEffect } from "react";
import { SetShowHeaderContext } from "../../../App";

const SignUp = () => {
  const setShowHeader = useContext(SetShowHeaderContext);

  useEffect(() => {
    setShowHeader(false);

    return () => {
      setShowHeader(true);
    };
  }, [setShowHeader]);

  return <div>sign up</div>;
};

export default SignUp;
