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

  return <div className="container px-3 mx-auto">hi</div>;
};

export default SignUp;
