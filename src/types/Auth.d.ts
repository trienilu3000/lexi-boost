export interface Login {
    email: string;
    password: string;
    rememberMe?: boolean;
}


export interface Signup {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    termsAccepted?: boolean;
}