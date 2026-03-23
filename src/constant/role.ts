export const ROLES = {
    ADMIN: "ADMIN",
    USER: "USER",
} as const;

export type Roles = (typeof ROLES)[keyof typeof ROLES];