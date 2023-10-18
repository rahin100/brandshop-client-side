import { Link} from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);


  const handleLogin = (e) => {
    e.preventDefault();
    e.target.reset()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
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
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-[14px] font-light text-gray-500 dark:text-gray-400">
                Do not have an account yet?{" "}
                <Link
                  to="/signUp"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  <button className="btn btn-active btn-link">Sign Up</button>
                </Link>
              </p>
              <div>
                <p className="text-[14px] font-light text-gray-500 dark:text-gray-400">
                  Continue With
                  <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="btn btn-primary btn-sm ml-[10px]"
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
