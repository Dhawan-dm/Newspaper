import React, { Component } from 'react';

export class NewsItem extends Component {

  render() {
    let { description, title, newsImage, newsUrl, author, date, source } = this.props;

    let badgeStyle = {
      zIndex: '1',
      left:"85%",
      backgroundColor:"red"
      
    }
    
    return (<>
      <div className="card" >
        <span class="position-absolute top-0 translate-middle badge rounded-pill " style={badgeStyle}>
          {source}
          <span class="visually-hidden">unread messages</span>
        </span>
        <img src={newsImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}
          </h5>
          <p className="card-text">{description}...</p>
          <p class="card-text"><small class="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
          {!localStorage.getItem('token')?<a href='/login'  rel="noreferrer" className="btn btn-sm btn-dark">Go somewhere</a>:<a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Go somewhere</a>}
        </div>
      </div>
    </>);
  }
}


export default NewsItem;
