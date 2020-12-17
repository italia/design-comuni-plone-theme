/**
 * View TwitterPosts block.
 * @module components/ItaliaTheme/Blocks/TwitterPosts/View
 */

import React from 'react';
import Body from '@italia/components/ItaliaTheme/Blocks/TwitterPosts/Body';
/**
 * View TwitterPosts block class.
 * @class TwitterPostsView
 * @extends Component
 */
const View = ({ data }) => {
  return (
    <div className="block twitter_posts">
      <Body data={data} />
    </div>
  );
};

export default View;
