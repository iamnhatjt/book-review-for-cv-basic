import React from 'react'
import data from '../../data.json'
import './style.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function TopHot(props) {
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
    
    const {tophot} = props
    


    return (
        <div>
            <div className="text-trend">
                Top hot
            </div>
            {data.map((book,value) =>{
                if(value < tophot){
                    return (
                        <div className="">

                            <Link to={"/book/" + to_slug(book.title)} className="d-flex text-light top-list">
                                <div className="count">{value}</div>
                                <div className="title-month"> {book.title} </div>
                            </Link>
                        </div>
                    )
                }
            })}

        </div>
    )
}
