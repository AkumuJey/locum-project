

import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

interface AuthContextProps {
  currentUser: User | null;
}

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
});

export const AuthContextProvider = ({ children }: { children?: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
    });

    return () => unsubscribe();
  }, [currentUser]);

  const value: AuthContextProps = {
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

