import React from "react";

let LoginForm = (props) => {
    let elem,
        handleSubmit = e => {
            e.preventDefault();
            if (!elem.value.trim()) {
                return;
            }
            props.onSubmit(elem.value);
        };
    
    return (
        <form className="form-inline" onSubmit={handleSubmit} style={{textAlign: "center", paddingTop: 50}}>
            
            <div className="form-group">
                <label>Who are you?</label>
                <input ref={ e => elem = e } type="text" className="form-control" placeholder="Your Name" />
                <button type="submit" className="btn btn-default">Log In</button>
            </div>
            
        </form>
    );
};

LoginForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
}

export default LoginForm;