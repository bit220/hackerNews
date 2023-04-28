import React, {useEffect, useState} from 'react';
import cl from "./NewsList.module.css";
import {Link} from "react-router-dom";
import {useFetchNewsIdsQuery} from "../../services/NewsIdsService";
import NewsItem from "../NewsItem/NewsItem";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {activeStoriesSlice} from "../../store/reducers/storySlice";


const stories = ['topstories', 'newstories', 'beststories']

const NewsList = () => {

    const dispatch = useAppDispatch()
    const {activeStories} = useAppSelector(state => state.activeStoriesReducer)
    const {setActiveStories} = activeStoriesSlice.actions

    const { data: newsIds, error, isLoading, refetch } = useFetchNewsIdsQuery(activeStories, {
        pollingInterval: 60000
    })

    const selectStories = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(setActiveStories((e.target as HTMLElement).innerHTML));
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }




    if (isLoading) {
        return (
            <div className="preloader">
            </div>
        )
    }

    return (
        <div className={cl.container}>
            <Link className={cl.mainTitle} to="/">
                <h1>Latest 100 of Hacker News</h1>
            </Link>

            <div className={cl.sticky__header}>
                <div className={cl.header}>
                    <div>
                        <a
                            href=""
                            className={cl.refresh}
                            onClick={e => {
                                e.preventDefault()
                                refetch()
                            }}
                        >Refresh News List</a>
                    </div>

                    <div className={cl.title}>
                        <ul className={cl.storiesList}>
                            {stories.map(stories =>
                                <a
                                    key={stories}
                                    href=""
                                    onClick={selectStories}
                                    className={`${cl.story} ${activeStories === stories && cl.active}`}
                                >
                                    {stories}
                                </a>
                            )}
                        </ul>
                    </div>

                    <div className={cl.rating}>
                        Rating
                    </div>

                    <div className={cl.author}>
                        Author
                    </div>

                    <div className={cl.date}>
                        Date
                    </div>

                    <div className={cl.comments}>
                        Comments
                    </div>
                </div>
            </div>

            {newsIds && newsIds.map((itemId, index) => itemId &&
                <Link
                    key={itemId}
                    className={cl.item}
                    to={`/news/${itemId}`}
                >
                    <NewsItem index={index} id={itemId}/>
                </Link>)
            }
        </div>
    );
};

export default NewsList;