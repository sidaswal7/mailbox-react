import React, { useRef} from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const AuthForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const history = useHistory();

  const formHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;               
    const enteredConfirmPassword = confirmPasswordRef.current.value;

    if (enteredPassword !== enteredConfirmPassword) {
        alert("The password did not match!");
        return;
      }
      async function signUp() {
        try {
          const response = await fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCCzBR5DqvTrAYAQoNbzB9Xnj5JyWONWkQ`,
            {
              method: "POST",
              body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          if (response.ok) {
            console.log("New user has been registered");
            history.replace("/signin")
          } else {
            throw new Error(data.error.message);
          }
        } catch (error) {
          console.log(error.message);
        }
      };
      signUp();
    }
  return (
    <div className="flex justify-center items-center mt-24">
      <form className="shadow-md px-7 py-5 rounded-md bg-blue-100 border border-blue-950" onSubmit={formHandler}>
        <h2 className="text-center text-xl font-semibold mb-5 ">Sign Up</h2>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email:{" "}
          </label>
          <input
            className="block w-full border border-slate-400 px-3 py-1 mb-3"
            id="email"
            type="email"
            ref={emailRef}
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-medium">
            Password:{" "}
          </label>
          <input
            className="block w-full border border-slate-400 px-3 py-1 mb-3"
            id="password"
            type="password"
            ref={passwordRef}
          />
        </div>
        <div>
          <label htmlFor="confirmpass" className="text-sm font-medium">
            Confirm Password:{" "}
          </label>
          <input
            className="block w-full border border-slate-400 px-3 py-1 mb-3"
            id="confirmpass"
            type="password"
            ref={confirmPasswordRef}
          />
        </div>
        <div className="flex justify-center items-center">
          <button className="py-1 px-2 bg-orange-500 hover:bg-orange-600 rounded-md shadow-md w-full text-white font-medium my-4">
            SignUp
          </button>
        </div>
        <p className="text-sm text-slate-500 mr-1 text-center">
          Already a user?
          <Link to="/signin" className="text-orange-500 ml-2 font-semibold" type="submit">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
