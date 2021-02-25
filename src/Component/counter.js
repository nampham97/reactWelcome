
function counter(props){
    let sostyle = {
        'fontSize': '25px'
    }

    let getClassSo = (props) =>{
        let classne = 'badge m-2 badge-';
        classne += props.counter.value === 0 ? "warning" : "primary";
        return classne;
    }
    
    let getFormat = (props) =>{
        let { value } = props.counter;
        return value === 0 ? 'Zero' : value;
    }



    return <div>
      
           <div className="row">
              <div className='col-md-1'>
                  <span style={sostyle} className={getClassSo(props)}>
                     {getFormat(props)}
                  </span>
              </div>
              <div className='col-md-2'>
                  <button 
                    className='btn btn-secondary'
                    onClick ={() => props.tang(props.counter)}
                    >
                        <i className="fa fa-plus-circle" aria-hidden="true" />
                  </button>

                  <button 
                    className='btn btn-primary m-2'
                    onClick = {() => props.giam(props.counter)}
                    disabled = {props.counter.value === 0 ? "disabled" : ""}
                  >
                    <i className="fa fa-minus-circle" aria-hidden="true" />
                  </button>

                  <button 
                    className='btn btn-danger'
                    onClick = {() => props.xoa(props.counter.id)}
                    >
                    <i className="fa fa-trash-o" aria-hidden="true" />
                  </button>
              </div>
           </div>
  

        </div>

}



export default counter;