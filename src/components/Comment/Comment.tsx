import React, {FC, useState} from 'react';
import {newsItemAPI} from "../../services/NewsItemService";
import parse from 'html-react-parser';
import {options} from "../../helpers/htmlParser";
import cl from './Comment.module.css';
import moment from "moment";


interface ICommentsProps {
    id: number;
}

const Comment: FC<ICommentsProps> = ({id}) => {
    const { data: comment, error, isLoading } = newsItemAPI.useFetchNewsItemQuery(id)

    const [isKidsOpen, setIsKidsOpen] = useState(false);

    const openComments = (e: React.MouseEvent) => {
        setIsKidsOpen(!isKidsOpen);
    }

    return (
        <>
            {comment &&
                <div className={cl.comment}>
                    <div className={cl.info}>
                        <div className={cl.author}>{comment?.by}</div>
                        <div className={cl.date}>{moment(new Date(comment.time * 1000)).format('LLL')}</div>
                    </div>
                    <div className={cl.commentText}>
                        {parse(`${comment.text}`, options)}
                    </div>

                    {comment.kids && comment.kids.length > 0 &&
                        <div className={cl.replies}>
                            <button
                                className={`${cl.repliesBtn} ${isKidsOpen && cl.active}`}
                                onClick={openComments}
                            >
                                <div className={cl.repliesText}>replies: </div>
                                <div className={cl.repliesNumber}>{comment.kids ? comment.kids?.length : 0}</div>
                            </button>

                            <div>
                                {isKidsOpen && comment.kids && comment.kids.map(kid =>
                                    <Comment key={kid} id={kid}/>
                                )}
                            </div>
                        </div>
                    }

                </div>
            }
        </>


    );
};

export default Comment;