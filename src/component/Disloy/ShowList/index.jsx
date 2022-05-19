import React, { useState } from 'react'
import data from '../../data.json'
import './style.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function ShowList() {
    const [a, setA] = useState(6)
    const [cl, setCl] = useState('btn btn-success')

    function handleAdd(){
        if(a > data.length){
            setCl('btn btn-success d-none');
        }
        else{
            const adex = a + 6;
            setA(adex)

        }
    }

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
        <>
            {data.map((book, index) => {

                if(index < a){

                        var discription = book.discription
                        if(book.discription.length > 300){
                            discription = book.discription.slice(0,300).concat("...")
                            
                        }
                        
                        
                        return (
                            <div className="col-md-4 col-12">
                                <Link to={"/book/" + to_slug(book.title)} className="link ">
                                    <div className="show mb-5 sh-hover">
                                        <img src={book.img} alt="" />
                                        <div className="fs-3">
                                            {book.title}
                                        </div>
                                        <div className="fs-6">
                                            {discription}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                }
            })}
            <div className="text-center">
                <button className={cl} onClick={handleAdd}> Tải thêm</button>
            </div>
        </>
    )
}
