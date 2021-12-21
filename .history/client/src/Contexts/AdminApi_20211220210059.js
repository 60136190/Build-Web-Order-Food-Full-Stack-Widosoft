import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { InfoAdminInitiate } from "../redux/Action/ActionAdmin";
const AdminApi = (token) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InfoAdminInitiate(token));
  }, [token]);
  return {};
};

export default AdminApi;