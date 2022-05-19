import React, { useState } from 'react'
import './style.scss'
import data from '../data.json'
import { Link } from 'react-router-dom'

export default function Favourite() {
    const [index, setIndex] = useState(8)
    const [lifeClass, setLifeClass] = useState('btn btn-success')
    let lifeIndex = 0
    data.map(book => {
        if(book.category.includes('năng') > 0){
            lifeIndex++
        }
    })
    function handleOfLife(){
        let newIndex = index + 8;
        if(newIndex > lifeIndex){
            setLifeClass(' btn btn-success d-none')
        }
        
        setIndex(newIndex)
        
    }


    const [index1, setIndex1] = useState(8)
    const [lifeClass1, setLifeClass1] = useState('btn btn-success')
    let lifeIndex1 = 0
    data.map(book => {
        if(book.category.includes('Hội') > 0){
            lifeIndex1++
        }
    })
    function handleOfLife1(){
        let newIndex1 = index1 + 8;
        if(newIndex1 > lifeIndex1){
            setLifeClass1(' btn btn-success d-none')
        }
        
        setIndex1(newIndex1)
        
    }

    const [index2, setIndex2] = useState(8)
    const [lifeClass2, setLifeClass2] = useState('btn btn-success')
    let lifeIndex2 = 0
    data.map(book => {
        if(book.category.includes('Nhân') > 0){
            lifeIndex2++
        }
    })
    function handleOfLife2(){
        let newIndex2 = index2 + 8;
        if(newIndex2 > lifeIndex2){
            setLifeClass2(' btn btn-success d-none')
        }
        
        setIndex2(newIndex2)
        
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
        <div>

            <div className="art-life life-border">
                <div className="text-center m-5">
                    Kỹ năng- Nghệ thuật sống
                </div>
                <div className="container-fluid">
                    <div className="row">
                        {
                            data.map((book,value) =>{
                                if(value < index && book.category.includes("năng")){
                                    return (
                                        <div className="col-12 col-md-3 text-center mb-5 sh-hover">
                                            <Link to={"/book/" + to_slug(book.title)} className='link '>
                                                <div className="art-life-img mb-3">
                                                    <img src={book.img} alt="" />
                                                </div>
                                                <div className="art-life-infor ">
                                                    <div className="art-life-title ">
                                                        {book.title}
                                                    </div>
                                                    <div className="">
                                                        {book.author}
                                                    </div>
                                                </div>
                                                <div className="art-life-react text-center">
                                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i><i class="fas fa-star"></i>
                                                {Math.floor(Math.random() *500 + 800)} <i class="fas fa-users"></i>
                                                </div>
                                            </Link>

                                            
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                <div className="text-center">
                    <button className={lifeClass} onClick={handleOfLife}>Hiện thị thêm</button>
                </div>
            </div>



            <div className="art-life">
                <div className="text-center m-5">
                    Văn Hóa - Xã Hội - Tôn Giáo
                </div>
                <div className="container-fluid">
                    <div className="row">
                        {
                            data.map((book,value) =>{
                                if(value < index1 && book.category.includes("Hội")){
                                    return (
                                        <div className="col-12 col-md-3 text-center mb-5 sh-hover">
                                            <Link to={"/book/" + to_slug(book.title)} className='link '>
                                                <div className="art-life-img mb-3">
                                                    <img src={book.img} alt="" />
                                                </div>
                                                <div className="art-life-infor ">
                                                    <div className="art-life-title">
                                                        {book.title}
                                                    </div>
                                                    <div className="">
                                                        {book.author}
                                                    </div>
                                                </div>
                                                <div className="art-life-react text-center">
                                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i><i class="fas fa-star"></i>
                                                {Math.floor(Math.random() *500 + 800)} <i class="fas fa-users"></i>
                                                </div>
                                            </Link>

                                            
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                <div className="text-center">
                    <button className={lifeClass1} onClick={handleOfLife1}>Hiện thị thêm</button>
                </div>
            </div>




                        
            <div className="art-life">
                <div className="text-center m-5">
                    Nhân Vật - Sự Kiện
                </div>
                <div className="container-fluid">
                    <div className="row">
                        {
                            data.map((book,value) =>{
                                if(value < index2 && book.category.includes("Nhân")){
                                    return (
                                        <div className="col-12 col-md-3 text-center mb-5 sh-hover">
                                            <Link to={"/book/" + to_slug(book.title)} className='link '>
                                                <div className="art-life-img mb-3">
                                                    <img src={book.img} alt="" />
                                                </div>
                                                <div className="art-life-infor ">
                                                    <div className="art-life-title ">
                                                        {book.title}
                                                    </div>
                                                    <div className="">
                                                        {book.author}
                                                    </div>
                                                </div>
                                                <div className="art-life-react text-center">
                                                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i><i class="fas fa-star"></i>
                                                {Math.floor(Math.random() *500 + 800)} <i class="fas fa-users"></i>
                                                </div>
                                            </Link>

                                            
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                <div className="text-center">
                    <button className={lifeClass2} onClick={handleOfLife2}>Hiện thị thêm</button>
                </div>
            </div>

        </div>




    )
}
