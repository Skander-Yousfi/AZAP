import React from 'react';
import PropTypes from 'prop-types';
 
class FluidInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        focused: false,
        value: ""
      };
    }
    focusField() {
      const { focused } = this.state;
      this.setState({
        focused: !focused
      });
    }
    handleChange(event) {
      const { target } = event;
      const { value } = target;
      this.setState({
        value: value
      });
    }
    render() {
      const { type, label, style, id } = this.props;
      const { focused, value } = this.state;
      
      let inputClass = "fluid-input";
      if (focused) {
        inputClass += " fluid-input--focus";
      } else if (value != "") {
        inputClass += " fluid-input--open";
      }
      
      return (
        <div className={inputClass} style={style}>
          <div className="fluid-input-holder">
            
            <input 
              className="fluid-input-input"
              type={type}
              id={id}
              onFocus={this.focusField.bind(this)}
              onBlur={this.focusField.bind(this)}
              onChange={this.handleChange.bind(this)}
              autoComplete="off"
            />
            <label className="fluid-input-label" forHtml={id}>{label}</label>
            
          </div>
        </div>
      );
    }
  }

FluidInput.propTypes = {
    type: PropTypes.string,
    label:PropTypes.string,
    style: PropTypes.string,
    id: PropTypes.string,
}

  class Button extends React.Component {
    render() {
      return (
        <div className={`button ${this.props.buttonClass}`} onClick={this.props.onClick}>
          {this.props.buttonText}
        </div>
      );
    }
  }
  
  class LoginContainer extends React.Component {
    render() {
      
      const style = {
        margin: "15px 0"
      };
      return (
        <div className="login-container">
          <div className="title">
           Login
          </div>
          <FluidInput type="text" label="name" id="name" style={style} />
          <FluidInput type="password" label="password" id="password" style={style} />
          <Button buttonText="log in" buttonClass="login-button" />
        </div>
      );
    }
  }

Button.propTypes ={
    buttonClass: PropTypes.string,
    buttonText: PropTypes.string,
    onClick: PropTypes.func,
}
export default LoginContainer;