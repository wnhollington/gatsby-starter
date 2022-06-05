import * as React from 'react'

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

const ShareButtons = ({ url, title, description }) => (
  <div className="fixed top-0 left-0 flex flex-col top-20">
    <FacebookShareButton url={url} quote={description}>
      <FacebookIcon size={40} round={false} />
    </FacebookShareButton>

    <LinkedinShareButton url={url} title={title} summary={description}>
      <LinkedinIcon size={40} round={false}/>
    </LinkedinShareButton>

    <TwitterShareButton url={url} title={description}>
      <TwitterIcon size={40} round={false}/>
    </TwitterShareButton>

  </div>
);

export default ShareButtons