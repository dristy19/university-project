import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('Please agree to the Terms & Conditions');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === email)) {
      alert('Email already registered');
      return;
    }
    const newUser = { firstName, lastName, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-5xl h-[600px] bg-gray-800 rounded-xl overflow-hidden shadow-2xl flex-col lg:flex-row">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative">
          <img
            src="https://wallpapercave.com/wp/wp2417737.jpg" // image url //
            alt="Signup Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 p-8 sm:p-10 flex flex-col justify-center bg-gray-800">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Create an Account</h2>
          <p className="text-gray-300 mb-6 text-base sm:text-lg">
            Already have an account?{' '}
            <a href="/login" className="text-indigo-400 hover:text-indigo-300 transition duration-200">
              Log in
            </a>
          </p>
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                required
              />
            </div>
            <label className="flex items-center text-gray-300 text-sm sm:text-base">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-600 rounded"
                required
              />
              I agree to the Terms & Conditions
            </label>
            <button
              type="submit"
              className="w-full py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
            >
              Create Account
            </button>
            <p className="text-center text-gray-300 text-sm sm:text-base">
              Or register with{' '}
              <a href="#" className="text-indigo-400 hover:text-indigo-300 transition duration-200">
                Google
              </a>{' '}
              <a href="#" className="text-indigo-400 hover:text-indigo-300 transition duration-200">
                Apple
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;