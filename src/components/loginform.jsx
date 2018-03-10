import React from "react";
import PropTypes from "prop-types";

let LoginForm = props => {
    let elem,
        focus = () => {
            if (elem) {
                elem.focus();
            }
        },
        handleSubmit = e => {
            e.preventDefault();
            if (!elem.value.trim()) {
                return;
            }
            props.onSubmit(elem.value);
        };

    return (
        <form
            className="form-inline justify-content-center"
            onSubmit={handleSubmit}
            style={{ paddingTop: 50 }}
        >
            <div className="form-group">
                <label style={{ marginRight: 5 }}>Who are you?</label>
                <input
                    ref={e => {
                        elem = e;
                        focus();
                    }}
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                />
            </div>
            <button
                type="submit"
                className="btn btn-outline-dark"
                style={{ marginLeft: 5 }}
            >
                Log In
            </button>
        </form>
    );
};

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default LoginForm;
