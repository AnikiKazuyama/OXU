import * as React from 'react';

import PostCard from '../../../common/postCard';

import data from './testData';

import './style/index.scss';

class Rewiews extends React.Component {
    render() {
        return(
            <div className="reviews">
                { this.renderPosts() }
            </div>
        );
    }

    renderPosts() {
        return data.map(( post, key ) => {
            return (
                <PostCard  
                    title={ post.title }  
                    className={"reviews__post"}
                    description={ post.description }
                    authorName={ post.author.name }
                    reviews={ post.author.reviews }
                    avatarUrl={ post.author.avatarUrl }
                    key={ key }
                />
            );
        })
    }

}

export default Rewiews;