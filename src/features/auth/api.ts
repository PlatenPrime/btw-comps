import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { login, getMe } from "@/shared/api/auth";

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      // Сохраняем токен в локальное хранилище
      window.localStorage.setItem("token", data.token);
      // Обновляем данные пользователя в кэше
      queryClient.setQueryData(["auth"], data.user);
    },
  });
};

export const useAuth = () => {
  return useQuery({
    queryKey: ["auth"],
    queryFn: getMe,
    // Автоматически повторяем запрос, если токен истек
    retry: 1,
    staleTime: Infinity, // Считаем данные "свежими" до выхода пользователя
  });
};



export const useLogout = () => {
    const queryClient = useQueryClient();
  
    const logout = () => {
      // Удаляем токен из локального хранилища
      window.localStorage.removeItem("token");
  
      // Очищаем кэш запросов
      queryClient.clear();
  
      // Опционально: перенаправление на страницу входа
      window.location.href = "/login";
    };
  
    return logout;
  };