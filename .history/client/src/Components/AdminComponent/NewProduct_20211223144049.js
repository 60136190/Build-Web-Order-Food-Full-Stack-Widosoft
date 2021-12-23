import React, { useState, useContext, useEffect } from "react";
import { GlobalState } from "../../Contexts/GlobalState";
import { NewProductStyle } from "../../Styles/StylePages/Admin/NewProduct";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoadingImage } from "../../Imports/Index";
import axios from "axios";
import swal from "sweetalert";
import { toast } from "react-toastify";
const initialState = {
  tensp: "",
  chitiet: "",
  gia: 0,
  size: "",

  id_dm: "",
};
const NewProduct = () => {
  const [images, setImages] = useState(false);
  const state = useContext(GlobalState);
  const { product, categories } = useSelector((state) => state.products);
  const { token } = useSelector((state) => state.authAdmin);
  const [onEdit, setOnEdit] = useState(false);
  const [products, setProducts] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [loadingForm, setLoadingForm] = useState(false);
  const [callback, setCallback] = state.callback;
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {}, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProducts({ ...products, [name]: value });
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file)
        return swal("File not Exists", {
          icon: "error",
        });
      if (file.size > 1024 * 1024)
        // 1mb
        return swal("Size too large!", {
          icon: "error",
        });
      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        return swal("File format is incorrect.", {
          icon: "error",
        });
      let formData = new FormData();

      formData.append("file", file);
      setLoading(true);
      const res = await axios.post("/cloud/uploadUserImage/admin", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${token.accessToken}`,
        },
      });

      setLoading(false);
      setImages(res.data);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };
  const handleDestroy = async () => {
    try {
      setLoading(true);
      await axios.post(
        "/cloud/destroy/admin",
        { public_id: images.public_id },
        {
          headers: {
            Authorization: `Bearer ${token.accessToken}`,
          },
        }
      );
      setLoading(false);
      setImages(false);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const styleUpload = {
    display: images ? "block" : "none",
  };

  return (
    <>
      <NewProductStyle />
      <div className="newProduct">
        <div className="create_product">
          <div className="upload">
            <input
              type="file"
              name="file"
              id="file_up"
              onChange={handleUpload}
            />
            {loading ? (
              <div id="file_img">
                <LoadingImage />
              </div>
            ) : (
              <div id="file_img" style={styleUpload}>
                <img src={images ? images.url : ""} alt="" />
                <span onClick={handleDestroy}>X</span>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <label htmlFor="product_id">Name Product</label>
              <input
                type="text"
                name="tensp"
                id="tensp"
                required
                value={product.tensp}
                onChange={handleChangeInput}
                disabled={onEdit}
              />
            </div>

            <div className="row">
              <label htmlFor="title">Description</label>
              <input
                type="text"
                name="chitiet"
                id="chitiet"
                required
                value={product.chitiet}
                onChange={handleChangeInput}
              />
            </div>
            <div className="row">
              <label htmlFor="title">Size</label> &nbsp;
              <select
                name="size"
                value={product.size}
                onChange={handleChangeInput}
              >
                <option value="">Please select a category</option>
                <option value="X">X</option>
                <option value="M">M</option>
                <option value="L">L</option>
              </select>
            </div>
            <div className="row">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="gia"
                id="gia"
                required
                value={product.gia}
                onChange={handleChangeInput}
              />
            </div>

            <div className="row">
              <label htmlFor="categories">Categories: </label>
              <select
                name="tendm"
                value={product.tendm}
                onChange={handleChangeInput}
              >
                <option value="">Please select a category</option>
                {categories.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.tendm}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit">{onEdit ? "Update" : "Create"}</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewProduct;