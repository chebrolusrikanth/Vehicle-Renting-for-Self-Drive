
function Second(props) {
    let show=false;
    return(
        <div className="Secondelement" >
         <h1>HI {show? props.name:'someone'}</h1>
        </div>
    )
}

export default Second;