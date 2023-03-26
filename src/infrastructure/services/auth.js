import { getService, postService } from "./api";

export const authenticateUser = async (email, password) => {
  const isAuth = true;
  const response = await postService(
    "auth",
    {
      email: email,
      password: password,
    },
    isAuth
  );

  if (!response?.token) {
    return response;
  }

  localStorage.setItem("token", response?.token);
  return response;
};

export const isAuthenticated = async () => {
  const response = await getService("user");
  return response?.detail ? false : true;
};
