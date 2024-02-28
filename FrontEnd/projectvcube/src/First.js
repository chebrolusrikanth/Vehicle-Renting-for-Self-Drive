
import './First.css'

function SubFirst(props) {
    return(
    <div>
    <h4>Name :{props.name}  </h4>
    <h4>Age : {props.age} </h4>
    <hr/>
    </div>
    );
};

function First() {
    return(
    <div className='firstapp'>
        <h1>It is first Component</h1>
        <SubFirst name='raju' age={23} />
        <SubFirst name='karthik' age={22} />
        <SubFirst name='ramesh' age={18} />


    </div>
    );

};

export default First;