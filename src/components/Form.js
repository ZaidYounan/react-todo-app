import React, { useState } from "react";

function Form(props) {

    const [ name, setName ] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (name.length) {
            props.addTask(name);
        } else {
            alert("Field cannot be empty.")
        }
        setName("");
    }

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
                </h2>
                <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                placeholder={name}
                onChange={handleChange}
                />
                <button type="submit" className="btn btn__primary btn__lg">
                Add
                </button>
            </form>
        </div>
    )
}

export default Form
