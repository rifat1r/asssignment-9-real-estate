import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location", location);
  const { loginUser, googleProvider, githubProvider } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    //login user
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: "success",
          title: "User Loggedin successfully",
          showConfirmButton: false,
          timer: 3000,
        });
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Wrong credential!",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };
  // Sign in with Google
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: "success",
          title: "User Logged in successfully",
          showConfirmButton: false,
          timer: 3000,
        });
        navigate(location.state?.from || "/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Google Sign-in failed!",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };
  // Sign in with github
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: "success",
          title: "User Logged in successfully",
          showConfirmButton: false,
          timer: 3000,
        });
        navigate(location.state?.from || "/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Github Sign-in failed!",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };
  return (
    <div className="w-3/4 mx-auto">
      <Helmet>
        <title>LiveLux | Login</title>
      </Helmet>
      <h className="text-4xl flex justify-center font-semibold">Please Login</h>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-secondary">Login</button>
        </div>
      </form>
      <p className="text-center">
        New to this site? Please{" "}
        <Link className="text-blue-500 font-medium" to="/register">
          Register
        </Link>
      </p>
      <div className="flex justify-center gap-4 my-4">
        <h2 onClick={handleGoogleLogin} className="flex items-center gap-1 btn">
          <FaGoogle />
          SignIn With Google
        </h2>
        <h2 onClick={handleGithubLogin} className="flex items-center gap-1 btn">
          <FaGithub />
          SignIn With Github
        </h2>
      </div>
    </div>
  );
};

export default Login;
