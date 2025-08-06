import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-5xl h-[600px] bg-gray-800 rounded-xl overflow-hidden shadow-2xl flex-col lg:flex-row">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative">
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.QHoEFY_uOousL_HttSSuzgHaE8?w=2000&h=1334&rs=1&pid=ImgDetMain&o=7&rm=3" //  image URL 
            alt="Login Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 p-8 sm:p-10 flex flex-col justify-center bg-gray-800">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Log In</h2>
          <p className="text-gray-300 mb-6 text-base sm:text-lg">
            Don’t have an account?{' '}
            <a href="/signup" className="text-indigo-400 hover:text-indigo-300 transition duration-200">
              Sign up
            </a>
          </p>
          <form onSubmit={handleLogin} className="space-y-5">
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
            <button
              type="submit"
              className="w-full py-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;