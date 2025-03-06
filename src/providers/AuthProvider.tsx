import { createContext, useEffect, useState, ReactNode } from "react";
import { useAuthStore, AuthInfo } from "../stores/authStore";
import AuthAPI from "../pages/auth/api/authApi";


interface AuthContextProps {
    userInfo: AuthInfo | null;
    loginState: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { isAuthenticated, setAuthenticated, setUserInfo, resetAuth } = useAuthStore();
    const [userInfo, setLocalUserInfo] = useState<AuthInfo | null>(null);

    useEffect(() => {
        if (isAuthenticated) {
            AuthAPI.getUser()
                .then((res) => setLocalUserInfo(res))
                .catch(() => resetAuth());
        }
    }, [isAuthenticated]);

    const loginState = async (email: string, password: string) => {
        const data = await AuthAPI.login(email, password);
        console.log("data ==> ", data);
        setAuthenticated(true);
        setUserInfo(null);
        setLocalUserInfo(null);
    };

    const logout = async () => {
        await AuthAPI.logout();
        resetAuth();
        setLocalUserInfo(null);
    };

    return (
        <AuthContext.Provider value={{ userInfo, loginState, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
