import { Navigate } from "react-router-dom";

const HomeRedirect = () => {
  return (
    <>
      <Navigate to={`/`} replace={true} />;
    </>
  );
};

export default HomeRedirect;
