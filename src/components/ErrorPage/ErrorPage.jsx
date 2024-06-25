import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center">Oopps</h2>
      <Link className="btn" to={-1}>
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
