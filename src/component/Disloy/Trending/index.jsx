import React from 'react'
import data from '../../data.json'
import './style.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function index() {
    const book = data[1];
    return (
        <div>
            <div className="text-trend">
                Top Week
            </div>
            <div className="trend-info">
                    <div className="trend-img">
                        <img src={book.img} alt="" />
                    </div>
                    <div className="trend-text">
                        <div className="title">
                            {book.title}.
                        </div>
                        <div className="author">
                            Tác giả: {book.author}.
                        </div>
                        <div className="category">
                            Thể loại: {book.category}
                        </div>
                        <div className="discription">
                            {book.discription}
                        </div>
                    </div>
            </div>
        </div>
    )
}
