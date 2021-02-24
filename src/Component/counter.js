
function counter(props){
    let sostyle = {
        'fontSize': '15px'
    }

    let getClassSo = (props) =>{
        let classne = 'badge m-2 badge-';
        classne += props.counter === '0' ? "warning" : "primary";
        return classne;
    }
    
    let getFormat = (props) =>{
        let { counter } = props;
        return counter === '0' ? 'Zero' : counter;
    }

    return <div>
        <div className="container">
           <div className="row">
              <div className='col-md-1'>
                  <span style={sostyle} className={getClassSo(props)}>
                     {getFormat(props)}
                  </span>
              </div>
              <div className='col-md-4'>
                  <button className='btn btn-primary'>
                  <i className="fab fa-accusoft"></i>
                  </button>

                  <button className='btn btn-primary'>
                  <i className="fab fa-accusoft">a</i>
                  </button>

                  <button className='btn btn-primary'>
                  <i className="fab fa-accusoft"></i>
                  </button>
              </div>
           </div>
        </div>

    </div>

}



export default counter;