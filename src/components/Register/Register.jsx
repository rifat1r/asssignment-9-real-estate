import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    console.log(email, password, name, photo);
    //password verification
    if (password.length < 6) {
      return Swal.fire({
        icon: "error",
        title: "Password should be atleast 6 characters",
        showConfirmButton: false,
        timer: 3000,
      });
    } else if (!/[A-Z]/.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Password should be atleast 1 uppercase character",
        showConfirmButton: false,
        timer: 3000,
      });
    } else if (!/[a-z]/.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Password should be atleast 1 lowercase character",
        showConfirmButton: false,
        timer: 3000,
      });
    }
    //create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: "success",
          title: "User created successfully",
          showConfirmButton: false,
          timer: 3000,
        });
        updateUserProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => console.log("profile Updated"))
          .catch((error) => console.log(error.message));
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 3000,
        });
      });
    navigate("/");
  };
  return (
    <div className="w-3/4 mx-auto">
      <h2 className="text-4xl flex justify-center font-semibold">
        Please Register
      </h2>
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phote </span>
          </label>
          <input
            type="text"
            placeholder="Photo URL"
            name="photo"
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
