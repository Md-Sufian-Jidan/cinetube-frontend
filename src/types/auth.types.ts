export interface IRegisterResponse {
    id: string;
    email: string;
    name: string;
    role: string;
    createdAt: string;
    updatedAt: string;
}

export interface ILoginResponse {
    token: string;
    user: {
        id: string;
        email: string;
        name: string;
        image?: string
        role: string;
        status: string;
    };
}