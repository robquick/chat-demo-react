import React from "react";

let MessageInput = (props) => {
    let elem,
        handleSubmit = e => {
            e.preventDefault();
            if (!elem.value.trim()) {
                return;
            }
            props.onSubmit(elem.value);
            elem.value = "";
        };
        
    return (
        <form onSubmit={handleSubmit}>
            <input ref={e => elem = e} type="text" className="form-control" />
        </form>
    );
};

MessageInput.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
}

export default MessageInput;