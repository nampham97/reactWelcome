import { useState } from "react";

function FormSearh({handleSubmit, history}){

    let [searchEntry, setSearchEntry] = useState("");

    const onChangeInput = (e =>{
        setSearchEntry(e.target.value);
    });

    return <form className="formSearch"
            onSubmit = {e => handleSubmit(e, history, searchEntry)}
    >

        <input className="form form-control" placeholder="Keywords..."
            onChange = {onChangeInput}
            value = {searchEntry}
        ></input>
        <button className="btn btn-info" type="submit">
            <svg height="32" width="32">
            <path
                d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
                fill="#ffffff"
                fillRule="evenodd"
            />
            </svg>

        </button>
    </form>
}

export default FormSearh;