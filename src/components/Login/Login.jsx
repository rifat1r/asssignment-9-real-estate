import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const passowrd = e.target.password.value;
    console.log(email, passowrd);
    //login user
    loginUser(email, passowrd)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: "success",
          title: "User Loggedin successfully",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Wrong crudential!",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };
  return (
    <div className="w-3/4 mx-auto">
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
    </div>
  );
};

export default Login;
