import * as React from 'react';

import IPostCardP from './IPostCardP';

import Button from '../button';

import './style/index.scss';

class PostCard extends React.Component<IPostCardP,{}> {
    public render() {

        const {
            title, 
            description, 
            authorName, 
            reviews, 
            avatarUrl, 
            className
        } = this.props;

        return(
            <div className={ `post-card ${ className }` }>
                <h3 className="post-card__title"><a href="" className="post-card__link">{ title }</a></h3>
                <div className="post-card__description">{ description }</div>
                <div className="post-card__bottom">
                    <div className="post-card__author">
                        <a href="" className="post-card__author-avatar" style={ this.getAvatarStyle() }/>
                        <div className="post-card__author-info">
                            <div className="post-card__name">
                                <a href="" className="post-card__name-title">{ authorName }</a>
                                <span className="post-card__name-description">name</span>
                            </div>
                            <div className="post-card__reviews">
                                <span className="post-card__reviews-title">{ reviews }</span>
                                <span className="post-card__reviews-description">reviews</span>
                            </div>
                        </div>
                    </div>
                    <Button as="a" className="post-card__read-button">Read</Button>
                </div>
            </div>
        );
    }

    getAvatarStyle():React.CSSProperties  {
        const { avatarUrl } = this.props;

        return ({
            backgroundImage: `url(${ avatarUrl })`
        })
    }

    static defaultProps = {
        title: '', 
        description: '', 
        authorName: '', 
        reviews: '', 
        avatarUrl: ''
    }
}

export default PostCard;