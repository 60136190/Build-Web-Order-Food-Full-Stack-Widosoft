import axios from "axios";
import * as types from "../ActionTypes";
import { toast } from "react-toastify";
import swal from "sweetalert";
//?Register
export const RegisterStart = () => ({
  type: types.REGISTER_API_START,
});
export const RegisterSuccess = (apis) => ({
  type: types.REGISTER_API_SUCCESS,
  payload: apis,
});
export const RegisterFail = (error) => ({
  type: types.REGISTER_API_FAIL,
  payload: error,
});
//?Login
export const LoginStart = () => ({
  type: types.LOGIN_API_START,
});
export const LoginSuccess = (api) => ({
  type: types.LOGIN_API_SUCCESS,
  payload: api,
});
export const LoginFail = (error) => ({
  type: types.LOGIN_API_FAIL,
  payload: error,
});
//?Logout
export const LogoutStart = () => ({
  type: types.LOGOUT_API_START,
});
export const LogoutSuccess = () => ({
  type: types.LOGOUT_API_SUCCESS,
});
export const LogoutFail = () => ({
  type: types.LOGOUT_API_FAIL,
});

//? refresh_token
export const RefreshTokenStart = () => ({
  type: types.REFRESH_TOKEN_ADMIN_START,
});
export const RefreshTokenSuccess = (token) => ({
  type: types.REFRESH_TOKEN_ADMIN_SUCCESS,
  payload: token,
});
export const RefreshTokenFail = (error) => ({
  type: types.REFRESH_TOKEN_ADMIN_FAIL,
  payload: error,
});

//? InfoAdmin
export const InfoAdminStart = () => ({
  type: types.ACCEPT_TOKEN_GET_ADMIN_START,
});
export const InfoAdminSuccess = (token) => ({
  type: types.ACCEPT_TOKEN_GET_ADMIN_SUCCESS,
  payload: token,
});
export const InfoAdminFail = (error) => ({
  type: types.ACCEPT_TOKEN_GET_ADMIN_FAIL,
  payload: error,
});

//? ChangePassword
export const ChangePasswordAdminStart = () => ({
  type: types.CHANGE_ADMIN_PASSWORD_START,
});
export const ChangePasswordAdminSuccess = (token) => ({
  type: types.CHANGE_ADMIN_PASSWORD_SUCCESS,
  payload: token,
});
export const ChangePasswordAdminFail = (error) => ({
  type: types.CHANGE_ADMIN_PASSWORD_FAIL,
  payload: error,
});

//? GetAll User
export const GetAllUserStart = () => ({
  type: types.GET_ALL_USER_START,
});
export const GetAllUserSuccess = (token) => ({
  type: types.GET_ALL_USER_SUCCESS,
  payload: token,
});
export const GetAllUserFail = (error) => ({
  type: types.GET_ALL_USER_FAIL,
  payload: error,
});
//? GetAll Amin
export const GetAllAdminStart = () => ({
  type: types.GET_ALL_ADMIN_START,
});
export const GetAllAdminSuccess = (token) => ({
  type: types.GET_ALL_ADMIN_SUCCESS,
  payload: token,
});
export const GetAllAdminFail = (error) => ({
  type: types.GET_ALL_USER_FAIL,
  payload: error,
});
//!Register
export const RegisterInitiate = (
  email,
  hoten,
  username,
  password,
  ngaysinh,
  gioitinh,
  dienthoai
) => {
  return async function (dispatch) {
    dispatch(RegisterStart());
    await axios
      .post("/admin/register", {
        email,
        hoten,
        username,
        password,
        ngaysinh,
        gioitinh,
        dienthoai,
      })
      .then((user) => {
        dispatch(RegisterSuccess(user.data));
      })
      .catch((error) => {
        dispatch(RegisterFail(toast.error(error.data)));
      });
  };
};
//!Login
export const loginInitiate = (email, password) => {
  return async function (dispatch) {
    dispatch(LoginStart());
    await axios
      .post("/admin/login", { email, password })
      .then((user) => {
        dispatch(LoginSuccess(user.data));
      })
      .catch((error) => {
        dispatch(LoginFail(toast.error(error.data)));
      });
  };
};
//!Logout
export const LogoutInitiate = () => {
  return async function (dispatch) {
    dispatch(LogoutStart());
    await axios
      .get("/admin/logout")
      .then((user) => {
        dispatch(
          LogoutSuccess(
            user,
            toast.success("Logout Success Thank You!"),
            localStorage.removeItem("firstLogin"),
            (window.location.href = "/login")
          )
        );
      })
      .catch((error) => {
        dispatch(LoginFail(error));
      });
  };
};

//!Refresh_token
export const RefreshTokenInitiate = (token) => {
  return async function (dispatch) {
    dispatch(RefreshTokenStart());
    await axios
      .get("/admin/refreshToken", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((user) => {
        dispatch(RefreshTokenSuccess(user.data));
      })
      .catch((error) => {
        dispatch(RefreshTokenFail(error.data));
      });
  };
};
//!InfoAdmin
export const InfoAdminInitiate = (token) => {
  return async function (dispatch) {
    dispatch(InfoAdminStart());
    await axios
      .get("/admin/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((user) => {
        dispatch(InfoAdminSuccess(user.data));
      })
      .catch((error) => {
        dispatch(InfoAdminFail(error.data));
      });
  };
};
//!ChangePassword
export const ChangeAdminInitiate = (token, { ...state }) => {
  return async function (dispatch) {
    dispatch(ChangePasswordAdminStart());
    await axios
      .patch(
        "/admin/changePassword",
        { ...state },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((user) => {
        dispatch(
          ChangePasswordAdminSuccess(user.data),
          swal("Change password successfully 🤩", {
            icon: "success",
          })
        );
      })
      .catch((error) => {
        dispatch(ChangePasswordAdminFail(error.data));
      });
  };
};
//!Get All User
export const GetAllUserInitiate = (token) => {
  return async function (dispatch) {
    dispatch(GetAllUserStart());
    await axios
      .get("/admin/customerAccount", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((user) => {
        dispatch(GetAllUserSuccess(user.data));
      })
      .catch((error) => {
        dispatch(GetAllUserFail(error.data));
      });
  };
};
//!Get All Admin
export const GetAllAdminInitiate = (token) => {
  return async function (dispatch) {
    dispatch(GetAllAdminStart());
    await axios
      .get("/admin/adminAccount", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((user) => {
        dispatch(GetAllAdminSuccess(user.data));
      })
      .catch((error) => {
        dispatch(GetAllAdminFail(error.data));
      });
  };
};
