import React from 'react'

export default function NewsItem (props) {

        let {title , description , imageUrl , newsUrl,author,date ,source} = props;
        return (
            <div>
                <div className="card my-3" >
                    <span className="position-absolute top-0translate-middle badge rounded-pill bg-danger" style={{left:"66%" , zIndex:"1"}}>{source}<span className="visually-hidden"></span></span>
                    <img className="card-img-top" src={imageUrl?imageUrl:"https://img.etimg.com/thumb/msid-87618547,width-1070,height-580,imgsize-80704,overlay-etpanache/photo.jpg"} alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author?author:"unknown"} on {new Date(date).toGMTString()?new Date(date).toGMTString():"Unknown"}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}



