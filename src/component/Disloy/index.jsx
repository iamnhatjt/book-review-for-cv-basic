import React from 'react'
import TopHot from './TopHot'
import Trending from './Trending'
import './style.scss'
import ShowList from './ShowList'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import data from '../data.json'

  

export default function Disploy() {

    function to_slug(str)
{
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     
 
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
 
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
 
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
 
    // return
    return str;
}

    return (
        <div>
            <div className="container-fluid ">
                <div className="row border-setting">
                    <div className="col-md-9 setting-border">
                        <Link to={'/book/' + to_slug(data[1].title)} className='disloy'>

                            <Trending />

                        </Link>
                    </div>
                    <div className="col-md-3 d-none d-md-block">
                        <TopHot tophot={5} />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="danhsach">
                        Danh sách
                    </div>
                    <ShowList/>
                </div>
            </div>
        </div>
    )
}
