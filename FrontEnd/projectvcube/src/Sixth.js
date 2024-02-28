
function Sixth(){
    let x=['rama','sita','hanuma','siva']
    return(
        <div>
            {x.map((item)=>{
                return <h1>{item}</h1>

            })}
        </div>

    );
};

export default Sixth;