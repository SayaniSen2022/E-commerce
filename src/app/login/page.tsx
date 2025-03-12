//login form
import Link from "next/link";

export const Login = () => {
  return (
    <div className="flex justify-center mt-40">
      <div className="bg-white border border-gray-100 shadow-lg rounded-lg p-8 w-96 h-fit">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Sign In
        </h2>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username..."
              className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password..."
              id="password"
              className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Link
              href="/forgot-password"
              className="text-xs pl-1 text-black underline"
            >
              Forgot your password?
            </Link>
          </div>
        </form>
        <p className="text-center text-gray-600 mt-4">
          New here?
          <Link href="/sign-up" className="text-blue-500 hover:underline">
            {" "}
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
