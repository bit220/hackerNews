import React from 'react';
import {Link, useParams} from "react-router-dom";
import cl from "./NewsDetailedPage.module.css";
import moment from "moment";
import {newsItemAPI} from "../../services/NewsItemService";
import Comment from "../Comment/Comment";
import parse from "html-react-parser";
import {options} from "../../helpers/htmlParser";


const NewsDetailedPage = () => {

    const { id } = useParams();

    const { data: news, error, isLoading, refetch } = newsItemAPI.useFetchNewsItemQuery(Number(id))

    console.log(news)

    return (
        <div className={cl.page}>
            {news &&
                <>
                    <div>
                        <Link className={cl.back} to="/">Go Back</Link>
                    </div>


                    <div className={cl.title}>
                        <h1>{news.title}</h1>

                        <div className={cl.extra}>
                            <div className={cl.date}>
                                {moment(new Date(news.time * 1000)).format('LLL')}
                            </div>

                            <div className={cl.author}>
                                by {news.by}
                            </div>

                            <Link target="_blank" className={cl.url} to={`${news.url}`}>
                                Read more
                            </Link>
                        </div>
                    </div>


                    {news.text &&
                        <div className={cl.text}>
                            {parse(`${news.text}`, options)}
                        </div>
                    }

                    <div className={cl.comments}>
                        <span className={cl.commentsTitle}>
                            Comments: {news.descendants}
                        </span>

                        <a
                            href=""
                            className={cl.refresh}
                            onClick={e => {
                                e.preventDefault()
                                refetch()
                            }}
                        >Refresh</a>
                    </div>

                    <div className={cl.commentsBlock}>

                        {news.kids && news.kids.map(id =>
                            <Comment key={id} id={id}></Comment>
                        )}

                    </div>
                </>
            }
        </div>
    );
};

export default NewsDetailedPage;