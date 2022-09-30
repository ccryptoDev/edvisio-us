import axios from "axios";
import baseUrl from "../../app.config";

export function isJWT() {
  return localStorage.getItem("adminToken");
}

const getUserId = async (token: string) => {
  let response = { data: {}, error: null };
  try {
    response = await axios.get(
      `${baseUrl}/api/application/id-by-token/${token}`
    );
  } catch (error: any) {
    response.error = error;
  }

  return response;
};

export const fetchUser = () => {
  const JWT = localStorage.getItem("adminToken");
  let token = null;
  try {
    if (typeof JWT === "string") {
      token = JSON.parse(JWT);
    }
    if (token) {
      return getUserId(token?.token);
    }
    return null;
  } catch (error) {
    return null;
  }
};

// LOGIN API
export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  let result = { error: null };
  try {
    const { data, status } = await axios.post(
      `${baseUrl}/api/application/login`,
      {
        email: credentials?.email,
        password: credentials?.password,
      }
    );

    if (status !== 201) {
      throw new Error("Something went wrong, please try again later");
    }
    result = data;
    if (data && data.token) {
      const { email, id, practiceManagement, role, token, userName } = data;
      localStorage.setItem(
        "adminToken",
        JSON.stringify({
          email,
          id,
          practiceManagement,
          role,
          token,
          userName,
        })
      );
    }
  } catch (error: any) {
    if (error.message.includes("401")) {
      return { error: { message: "Incorrect email or password" } };
    }

    return { error: { message: "server error" } };
  }

  return result;
};

// LOGOUT FUNCTION
export const logout = (cb: Function): void => {
  localStorage.removeItem("adminToken");
  if (localStorage.getItem("adminToken")) {
    window.location.reload();
  }
  if (typeof cb === "function") {
    cb();
  }
};

export async function registerUser(payload: any) {
  let response = { data: null, error: null };
  try {
    response = await axios.post(`${baseUrl}/application/saveUserInfo`, payload);
  } catch (error: any) {
    response.error = error;
  }
  return response;
}
