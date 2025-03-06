export interface LoginCredentials {
    email: string;
    password: string;
}


export interface SignUpCredentials {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface ResetPasswordCredentials {
    email: string;
    code: string;
    password: string;
}

export interface User {
    userId: string;
    email: string;
    fullName: string;
    phone: string;
    address: string | null;
    avatar: string | null;
    birthday: string | null;
    role: string;
    status: number;
}