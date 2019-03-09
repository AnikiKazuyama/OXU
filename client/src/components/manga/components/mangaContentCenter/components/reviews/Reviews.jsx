import React, { Component } from 'react';

import PostCard from '../../../../../common/postCard';

import data from './testData';

class Rewiews extends Component {
  renderPosts() {
    return data.map((post, key) => {
      const index = key;

      return (
        <PostCard
          title={post.title}
          className="reviews__post"
          description={post.description}
          authorName={post.author.name}
          reviews={post.author.reviews}
          avatarUrl={post.author.avatarUrl}
          key={`${post.author.name}${index}`}
        />
      );
    });
  }

  render() {
    return (
      <div className="reviews">
        { this.renderPosts() }
      </div>
    );
  }
}

export default Rewiews;
