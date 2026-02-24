import {defineStore} from "pinia";

export type User = {
    id: string;
    username: string;
    roles: string[];
};

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null as User | null,
        accessToken: null as string | null,
    }),

    getters: {
        isAuthenticated: (s) => Boolean(s.user && s.accessToken),
    },

    actions: {
        login(username: string, asAdmin: boolean) {
            this.user = {
                id: crypto.randomUUID(),
                username,
                roles: asAdmin ? ["ADMIN"] : ["VOTER"],
            };
            this.accessToken = "demo-token";
        },

        logout() {
            this.user = null;
            this.accessToken = null;
            window.location.href = "/login";
        }
    },
});