import React from "react";
import { UserStyle } from "../../Styles/StylePages/Admin/UserStyle";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import WcIcon from "@material-ui/icons/Wc";
import moment from "moment";
import "moment/locale/vi";
const ProfileAdmins = () => {
  const { InfoAdmin } = useSelector((state) => state.authAdmin);
  const img =
    "https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg";

  return (
    <>
      <UserStyle />
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">{`Profile Admin: ${InfoAdmin.hoten}`}</h1>
          <Link to={`/changePassword/${InfoAdmin.id}`}>
            <button className="userAddButton">Change Password</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img src={InfoAdmin.url || img} alt="" className="userShowImg" />
              <div className="userShowTopTitle">
                <span className="userShowUsername">
                  {`${InfoAdmin.hoten} (Admin)`}
                </span>
                <span className="userShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{InfoAdmin.username}</span>
              </div>
              <div className="userShowInfo">
                <WcIcon className="userShowIcon" />
                <span className="userShowInfoTitle">
                  {(InfoAdmin.gioitinh === 1 && "Nam") ||
                    (InfoAdmin.gioitinh === 0 && "Nữ ")}
                </span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">
                  {moment(`${InfoAdmin.ngaysinh}`).format("Do MMM YYYY")}
                </span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{InfoAdmin.dienthoai}</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{InfoAdmin.email}</span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">Nha Trang | VIET NAM</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit Admin</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Anna Becker"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="annabeck99@gmail.com"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+1 123 456 67"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="New York | USA"
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-1/c0.80.240.240a/p240x240/190801150_3047073538840591_1241117089856663372_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=agAKQQBr9wIAX8SQtLh&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT8qgwvHAdA2XJnlc5g0g4kcZDpjBgJ_H-7Rd8ooqvmEFg&oe=61E58E1E"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileAdmins;