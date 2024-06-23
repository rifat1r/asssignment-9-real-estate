import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const passowrd = e.target.password.value;
    console.log(email, passowrd);
    //create user
    createUser(email, passowrd)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: "success",
          title: "User created successfully",
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-3/4 mx-auto">
      <h className="text-4xl flex justify-center font-semibold">
        Please Register
      </h>
      <form onSubmit={handleRegister} className="card-body">
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
          <button className="btn btn-secondary">Register</button>
        </div>
      </form>
      <p className="text-center">
        Already have an account? Please{" "}
        <Link className="text-blue-500 font-medium" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
