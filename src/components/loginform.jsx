import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Form = styled.form`
    padding-top: 50px;
`;

const Label = styled.label`
    margin-right: 5px;
`;

const Button = styled.button`
    margin-left: 5px;
`;

const LoginForm = props => {
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
        <Form
            className="form-inline justify-content-center"
            onSubmit={handleSubmit}
        >
            <div className="form-group">
                <Label>Who are you?</Label>
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
            <Button type="submit" className="btn btn-outline-dark">
                Log In
            </Button>
        </Form>
    );
};

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default LoginForm;
