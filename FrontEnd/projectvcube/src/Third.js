function display(){
    alert('Button is pressed');
};

function Third(){

    return (
        <div>
            <button onClick={display}>Click Me</button>
        </div>

    );
};

export default Third;