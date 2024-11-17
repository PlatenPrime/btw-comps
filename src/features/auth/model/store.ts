import { create } from 'zustand';
import { login } from '@/shared/api/auth';

type AuthState = {
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    login: async (email, password) => {
        await login(email, password); // Используем запрос из shared/api/auth
        set({ isAuthenticated: true });
    },
}));