export interface IRegisterResponse {
    user: {
        id: string;
        email: string;
        name: string;
        image?: string
        role: string;
        status: string;
    };
}

export interface ILoginResponse {
    user: {
        id: string;
        email: string;
        name: string;
        image?: string
        role: string;
        status: string;
    };
};