import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";


const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state? location.state : '/')
        this.form.reset()
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleSocialLogin = (media) => {
    media()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-0">
  <div className=" flex flex-col items-center">
    <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left mt-[20px] mb-[20px]">Login now!</h1>
    <div className="w-full md:max-w-sm">
      <div className="card shadow-lg bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
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
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-4 md:mt-6">
            <button className="btn btn-primary w-full md:w-auto">Login</button>
          </div>
          <p className="text-xs md:text-sm font-light text-gray-500 dark:text-gray-400 text-center md:text-left mt-4">
            Do not have an account yet?{" "}
            <Link
              to="/signUp"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              <button className="btn btn-active btn-link">Sign Up</button>
            </Link>
          </p>
          <div className="text-center md:text-left mt-4">
            <p className="text-xs md:text-sm font-light text-gray-500 dark:text-gray-400">
              Continue With
              <button
                onClick={() => handleSocialLogin(googleLogin)}
                className="btn btn-primary btn-sm ml-2 md:ml-4"
              >
                Google
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

  );
};

export default Login;
