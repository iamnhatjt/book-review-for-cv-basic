import React from 'react'
import data from '../data.json'
import './style.scss'

export default function BookDetail() {
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
           {data.map((book, index) =>{
               if(window.location.href.search(to_slug(book.title) ) > 0){
                    return(
                        <div>
                        <div className="contaner-fluid bb">

                        <div className="book-detail d-flex  row">
                                <img src={book.img} alt="" className="col-md-3 mt-5 mx-auto" />
                                <div className="book-detail-infor col-md-9 container-fluid ">
                                    <div className="row">

                                        <div className="book-detail-itsefl col-md-9 ">
                                            <div className="fs-2 text-danger my-5">
                                                {book.title}
                                            </div>
                                            <div className="fs-5 mt-3">
                                                Author: {book.author}
                                            </div>
                                            <div className="fs-5 mt-3">
                                                Category: {book.category}
                                            </div>
                                            <div className="fs-5 mx-5 mt-5">
                                                {book.discription}
                                            </div>
                                        </div>
                                        <div className="book-detail-feedback col-md-3 mt-5">
                                            <div className="fs-5 opacity-50 my-3">
                                                <i class="fas fa-eye"></i>
                                                {Math.floor(Math.random() * 10000 + 5000)}
                                            </div>
                                            <div className="fs-5 opacity-50 my-3">
                                                <i class="fas fa-clock"></i>
                                                {Math.floor(Math.random() * 60 + 70)} day(s) ago
                                            </div>
                                            <div className="fs-5 opacity-50 my-3">
                                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                                {Math.floor(Math.random() * 500 + 500)}
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                        </div>
                    )
               }
           })}

           <div className="container ">
               <div className="row">
                    <div className="col-12 fs-3 text-success my-3 fw-bold ">
                       Top Comment
                    </div>
               </div>
               <div className="row my-3">
                   <div className="col-8 fs-4">
                       Trịnh Dương Nhật (12/9/2021)
                   </div>
                   <div className="col-3 text-danger">
                   <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                   </div>
                   <div className="col-12 fs-5 ">
                       Như một người thợ xây, không thể chê bai !!!
                   </div>
               </div>
               <div className="row my-3">
                   <div className="col-8 fs-4">
                       Rene Descartes (12/9/2021)
                   </div>
                   <div className="col-3 text-danger">
                   <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                   </div>
                   <div className="col-12 fs-5 ">
                   Đọc sách hay cũng giống như trò chuyện với các bộ óc tuyệt vời nhất của những thế kỷ đã trôi qua. 
                   </div>
               </div>
               <div className="row my-3">
                   <div className="col-8 fs-4">
                   Thomas Carlyle (12/9/2021)
                   </div>
                   <div className="col-3 text-danger">
                   <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                   </div>
                   <div className="col-12 fs-5 ">
                   Chúng ta sẽ trở thành gì phụ thuộc vào điều chúng ta đọc sau khi các thầy cô giáo đã xong việc với chúng ta. Trường học vĩ đại nhất chính là sách vở. 
                   </div>
                   <button className="btn btn-light text-center mt-5">Đăng Nhập để bình luận</button>
               </div>
           </div>
        
            
        </div>
    )
}
