// import react from 'react'

const Card = (props) =>{
    
    return <>
    <div className="extra content">
        <div className="content">{props.children}</div>
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div>
    </>
}
export default Card