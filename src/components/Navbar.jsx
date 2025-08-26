import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/counselling", label: "Counselling" },
  { to: "/scholarship", label: "Scholarships" },
  { to: "/courses", label: "Courses" },
  { to: "/exams", label: "Exams" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const userMenuRef = useRef(null);
  const navigate = useNavigate();
  const auth = getAuth();

  // Helper: derive a friendly name
  const deriveName = (profileName, authDisplayName, email) => {
    if (profileName && profileName.trim()) return profileName.trim();
    if (authDisplayName && authDisplayName.trim()) return authDisplayName.trim();
    if (email) return String(email).split("@")[0];
    return "Student";
  };

  // Detect logged-in user and fetch Firestore profile name
  useEffect(() => {
    let isMounted = true;

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setUserMenuOpen(false);

      if (!currentUser) {
        if (isMounted) setDisplayName("");
        return;
      }

      try {
        // Try to read students/{uid}
        const docRef = doc(db, "students", currentUser.uid);
        const snap = await getDoc(docRef);

        const profileData = snap.exists() ? snap.data() : null;
        const name = deriveName(
          profileData?.name,
          currentUser.displayName,
          currentUser.email
        );

        if (isMounted) setDisplayName(name);
      } catch (_e) {
        // If Firestore read fails, still show something usable
        const fallback = deriveName(
          "",
          currentUser.displayName,
          currentUser.email
        );
        if (isMounted) setDisplayName(fallback);
      }
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, [auth]);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setDisplayName("");
      navigate("/login");
    } catch (_e) {
      // Optional: surface an error toast/banner
    }
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md relative">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/pngegg (1).png" alt="Vision Logo" className="h-10 w-auto" />
          <span className="text-2xl font-extrabold text-purple-500 tracking-wide">
            Vision
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8 font-medium">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-400 font-semibold border-b-2 border-purple-400 pb-1"
                      : "hover:text-purple-300"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* User Menu */}
        <div className="hidden md:flex relative" ref={userMenuRef}>
          {user ? (
            <>
              <button
                onClick={() => setUserMenuOpen((prev) => !prev)}
                className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 font-medium max-w-[220px] truncate"
                title={displayName}
              >
                {"Hi, " + displayName || "Account"}
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                  <NavLink
                    to="/profile"
                    onClick={() => setUserMenuOpen(false)}
                    className="block px-4 py-2 hover:bg-purple-600"
                  >
                    My Profile
                  </NavLink>
                  <NavLink
                    to="/course"
                    onClick={() => setUserMenuOpen(false)}
                    className="block px-4 py-2 hover:bg-purple-600"
                  >
                    My Courses
                  </NavLink>
                  <NavLink
                    to="/scholarship"
                    onClick={() => setUserMenuOpen(false)}
                    className="block px-4 py-2 hover:bg-purple-600"
                  >
                    Scholarships
                  </NavLink>
                  <NavLink
                    to="/study-material"
                    onClick={() => setUserMenuOpen(false)}
                    className="block px-4 py-2 hover:bg-purple-600"
                  >
                    Study Material
                  </NavLink>
                  <NavLink
                    to="/exam"
                    onClick={() => setUserMenuOpen(false)}
                    className="block px-4 py-2 hover:bg-purple-600"
                  >
                    Exams
                  </NavLink>
                  <NavLink
                    to="/settings"
                    onClick={() => setUserMenuOpen(false)}
                    className="block px-4 py-2 hover:bg-purple-600"
                  >
                    Settings
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left block px-4 py-2 text-red-400 hover:bg-red-600 hover:text-white rounded-b-lg"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <button
                onClick={() => setUserMenuOpen((prev) => !prev)}
                className="focus:outline-none"
                aria-label="User menu"
              >
                <FaUserCircle className="w-8 h-8 text-purple-400 hover:text-purple-500" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                  <NavLink
                    to="/login"
                    onClick={() => setUserMenuOpen(false)}
                    className="block px-4 py-2 hover:bg-purple-600 rounded-t-lg"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/signup"
                    onClick={() => setUserMenuOpen(false)}
                    className="block px-4 py-2 hover:bg-purple-600 rounded-b-lg"
                  >
                    Signup
                  </NavLink>
                </div>
              )}
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-purple-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col space-y-3 px-6 py-4 font-medium">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-400 font-semibold border-b-2 border-purple-400 pb-1"
                      : "hover:text-purple-300"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* User Section in Mobile */}
          <div className="flex flex-col gap-3 px-6 pb-4">
            {user ? (
              <>
                <div className="px-4 py-2 rounded-lg bg-gray-700 text-center">
                  {displayName || "Account"}
                </div>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-center"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg bg-purple-500 hover:bg-purple-600 text-center"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg bg-purple-700 hover:bg-purple-800 text-center"
                >
                  Signup
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;