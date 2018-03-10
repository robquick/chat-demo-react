import React from "react";
import PropTypes from "prop-types";

const MessageInput = props => {
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
            <input
                ref={e => {
                    elem = e;
                    elem.focus();
                }}
                type="text"
                className="form-control"
            />
        </form>
    );
};

MessageInput.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default MessageInput;
