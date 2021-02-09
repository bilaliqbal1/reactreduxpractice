// import react from 'react'

const Details = props =>{
    
    return <>
    <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.avatar} />
                </a>
                <div className="content">
                    <a href="/" className="author" />
                        {props.author}
                    <div className="metadata">
                        <span className="date">{props.time}</span>
                    </div>
                    <div className="text">{props.post}</div>
                </div>
            </div>
        </div>
    </>
}
export default Details