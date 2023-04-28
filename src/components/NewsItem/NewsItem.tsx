import React, {FC} from 'react';
import cl from "../NewsList/NewsList.module.css";
import moment from "moment";
import {newsItemAPI} from "../../services/NewsItemService";

interface INewsItemProps {
    index: number;
    id: number;
}

const NewsItem: FC<INewsItemProps> = ({id, index}) => {
    const { data: news, error, isLoading } = newsItemAPI.useFetchNewsItemQuery(id)


    return (
        <>
            {news &&
                <>
                    <div className={cl.number}>
                        {index + 1}
                    </div>

                    <div className={cl.title}>
                        {news.title}
                    </div>

                    <div className={cl.rating}>
                        {news.score}
                    </div>

                    <div className={cl.author}>
                        {news.by}
                    </div>

                    <div className={cl.date}>
                        {moment(new Date(news.time * 1000)).format('LLL')}
                    </div>

                    <div className={cl.comments}>
                        {news.descendants}
                    </div>
                </>
            }
        </>

    );
};

export default NewsItem;