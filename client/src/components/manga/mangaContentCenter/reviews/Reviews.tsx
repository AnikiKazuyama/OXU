import * as React from 'react';

import PostCard from '../../../common/postCard';

import data from './testData';

import './style/index.scss';

class Rewiews extends React.Component<{},{}> {
    public render() {
        return(
            <div className="reviews">
                { this.renderPosts() }
            </div>
        );
    }

    private renderPosts() {
        return data.map(( post:any, key: number ) => {
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