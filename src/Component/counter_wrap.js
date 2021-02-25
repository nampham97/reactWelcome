import Counter from './counter';
function CounterWrap(props){

    const {
        refresh,
        recycle,
        list_counter,
        tang,
        giam,
        xoa
    } = props;

    return <div className='mr-auto'>
        <button className ="btn btn-success"
            onClick = {refresh}
        >
            <i className="fa fa-refresh" aria-hidden="true" />
        </button>

        <button className ="btn btn-primary"
            onClick = {recycle}
        >
            <i className="fa fa-recycle" aria-hidden="true" />
        </button>

        {list_counter.map(items => (
                <Counter 
               key ={items.id} counter={items} tang={tang} giam={giam} xoa={xoa}
            />
        ))}

        

    </div>
}

export default CounterWrap;