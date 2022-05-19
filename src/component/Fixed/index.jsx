import { useEffect, useState } from "react";
import "./style.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import data from "../data.json";

function App(props) {
  // xu ly form
  const [navb, setNavb] = useState("navb d-none d-md-block");

  function addClass() {
    if (navb.indexOf("active") < 0) {
      setNavb("navb active d-none d-md-block");
    } else {
      setNavb("navb d-none d-md-block");
    }
  }
  // xu ly from xong

  // chuyen dau

  function bodauTiengViet(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    // str = str.replace(/\W+/g, ' ');
    // str = str.replace(/\s/g, '-');
    return str;
  }

  function to_slug(str) {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
    str = str.replace(/(đ)/g, "d");

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, "");

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, "-");

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, "");

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, "");

    // return
    return str;
  }

  const [eTargetValue, seteTargetValue] = useState("");
  const [indexrule, setIndexRule] = useState(3);
  const [classMore, setClassMore] = useState("");
  const [classDisplay, setClassDisplay] = useState(" d-none");

  let i = 0;

  function handleInput(e) {
    const newValueInput = e.target.value;
    seteTargetValue(newValueInput);
  }

  function handleMore() {
    let newIndexRule = indexrule + 3;
    setIndexRule(newIndexRule);
    if (indexrule > 5) {
      setClassMore("d-none");
    }
  }

  function inInput() {
    setClassDisplay("");
    console.log("focus");
  }

  function outInput() {
    setTimeout(function () {
      setClassDisplay(" d-none ");
      console.log("oke");
    }, 200);
  }

  return (
    <div>
      {/* start header */}
      <div className="header container-fluid fixed-top d-none d-md-block">
        <div className="row">
          <div className="header-one col-4">
            <i
              onClick={() => addClass()}
              class="fas fa-bars hover-poiner"
              id="menu"
            ></i>
            <Link to="/" className="header-logo">
              Myblog book{" "}
            </Link>
          </div>
          <div className="header-two col-6">
            <input
              type="text"
              className="header-input"
              placeholder="Tìm kiếm..."
              onChange={handleInput}
              onFocus={inInput}
              onBlur={outInput}
            />
            {/* form seach */}
            <div className={"form-search  text-light " + classDisplay}>
              {data.map((book, index) => {
                if (
                  bodauTiengViet(book.title).indexOf(
                    bodauTiengViet(eTargetValue)
                  ) != -1
                ) {
                  i++;
                  return (
                    <div className="pb-3 ps-2 bb search-hover">
                      <Link
                        to={"/book/" + to_slug(book.title)}
                        className="link "
                      >
                        <div className=" fw-bold" style={{ height: "30px" }}>
                          {book.title}
                        </div>
                        <div className="" style={{ height: "30px" }}>
                          {book.author}
                        </div>
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
            {/* end form seach */}
          </div>
          <div className="col-1 header-search ">
            <i class="fas fa-search hover-poiner hover-bg"></i>
          </div>
        </div>
      </div>
      {/* end header start navbbar*/}

      <div className={navb}>
        <div className="navb-list">
          <div className="navb-item">
            <Link to="/home" className="navb-link">
              <i class="fas fa-home"></i>
              <span>Home</span>
            </Link>
          </div>
          <div className="navb-item">
            <Link to="/favorite" className="navb-link">
              <i class="fas fa-heart"></i>
              <span>Favorite</span>
            </Link>
          </div>
          <div className="navb-item">
            <Link to="/trending" className="navb-link">
              <i class="fas fa-poll"></i>
              <span>Trending</span>
            </Link>
          </div>
          <div className="navb-item">
            <Link to="upload" className="navb-link">
              <i class="fas fa-cloud-upload-alt"></i>
              <span>Upload</span>
            </Link>
          </div>
        </div>

        <div className="profile d-flex">
          <img
            src="https://scontent.fhan4-2.fna.fbcdn.net/v/t1.6435-9/76767463_180402183095238_129488436431159296_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=sBmTQFEdXdcAX-qeLEW&_nc_ht=scontent.fhan4-2.fna&oh=576ffc410e684d089779dc1130333046&oe=615EF021"
            alt=""
          />
          <div className="profile-text">
            <div className="profile-name fs-5">Nhật Jt</div>
            <div className="profile-job fs-6">Web Designer</div>
          </div>
        </div>
      </div>

      {/* responsive */}

      <div className="container-fluid d-block d-md-none bg-dark text-light re-header fixed-top">
        <div className="row">
          <div className="col-2 fw-bold text-success ">Book</div>
          <div className="col-10">
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <NavLink to="/home" activeClassName="main-class">
                    <i class="fas fa-home"></i>
                  </NavLink>
                </div>
                <div className="col-4">
                  <NavLink to="/favorite">
                    <i class="fas fa-heart"></i>
                  </NavLink>
                </div>
                <div className="col-4">
                  <NavLink to="/trending">
                    <i class="fas fa-poll"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
