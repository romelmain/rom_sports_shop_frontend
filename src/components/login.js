import axios from "axios";

export function login(user) {
  let apiResponse = {
    response: false,
    message: "",
    code: 0,
  };

  const loginRequest = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/users/login",
        user
      );
      const data = await response.data;
      console.log(response);
      console.log(response.data);
      console.log(response.status);

      switch (response.status) {
        case 200:
          apiResponse = {
            response: response.data,
            message: "",
            code: response.status,
          };
          localStorage.setItem("id", response.data.user_id);
          break;
        case 400:
        case 401:
        case 403:
          apiResponse = {
            response: response.data,
            message: response.statusText,
            code: response.status,
          };
      }
    } catch (e) {
      apiResponse = {
        response: false,
        message: e.message,
        code: 99,
      };
    }
    return apiResponse;
  };

  return loginRequest();
}
