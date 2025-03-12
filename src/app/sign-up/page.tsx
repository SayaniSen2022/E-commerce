//signup form
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white border border-gray-100 shadow-lg rounded-lg p-8 w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Create Your Account
        </h2>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Enter your first and last name..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Mobile Number"
              id="phone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password..."
              id="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?
          <Link href="/login" className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
