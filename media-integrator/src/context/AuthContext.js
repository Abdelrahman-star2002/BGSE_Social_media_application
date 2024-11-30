import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";



const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};


/*
const INITIAL_STATE = {

  user: null,
  isFetching: false,
  error: false,
}
*/
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  // Logout method to clear user and localStorage
  const logout = () => {
    dispatch({ type: "LOGOUT" }); // Dispatch a logout action
    localStorage.removeItem("user"); // Clear user from localStorage
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
        logout, // Expose the logout method
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
