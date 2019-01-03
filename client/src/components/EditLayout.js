import React from 'react';
import Modal from 'react-responsive-modal';
import FontAwesome from "react-fontawesome";
import styled from "styled-components";
import ReactTooltip from 'react-tooltip'

const FormStyle = styled.div`
  position: absolute;
  width: 10rem;
  height: 10rem;
  top: -1rem;
  right: -1rem;

  button {
    transition: .2s ease-in;

    &:hover {
      transform: scale(1.2);
    }
  }

`
const ModalForm = styled.div`
  width: 35rem;
  padding: 2rem;
  text-align: center;
  font-size: 1.2rem;
  background: linear-gradient(to bottom, #87e0fd 0%,#53cbf1 40%,#05abe0 80%);

  h2 {
    font-size: 3rem;
    text-shadow: 2px 2px 5px rgba(0,0,0,.2);
  }

  input {
    display: block;
    width: 50%;
    padding: .5rem 0;
    font-size: 1.2rem;
    text-align: center;
  }

  label {
    margin: .5rem 0;
  }

  .spacing {
    display: grid;
    justify-items: center;
    margin: 2rem;
  }

button {
	padding: 1em 2.5em;
	border-radius: 50px;
	background: #53cbf1;
	color: #fff;
	-webkit-transition: background-color 0.3s, color 0.3s;
	transition: background-color 0.3s, color 0.3s;
}
button {
	background: #ECEFF1;
	color: #37474f;
}
button::before {
	content: '';
	position: absolute;
	top: -20px;
	left: -20px;
	bottom: -20px;
	right: -20px;
	background: inherit;
	border-radius: 50px;
	z-index: -1;
	opacity: 0.4;
	-webkit-transform: scale3d(0.8, 0.5, 1);
	transform: scale3d(0.8, 0.5, 1);
}
button:hover {
	-webkit-transition: background-color 0.1s 0.3s, color 0.1s 0.3s;
	transition: background-color 0.1s 0.3s, color 0.1s 0.3s;
	color: #ECEFF1;
	background-color: #3f51b5;
	-webkit-animation: anim-moema-1 0.3s forwards;
	animation: anim-moema-1 0.3s forwards;
}

button:hover::before {
	-webkit-animation: anim-moema-2 0.3s 0.3s forwards;
	animation: anim-moema-2 0.3s 0.3s forwards;
}
@-webkit-keyframes anim-moema-1 {
	60% {
		-webkit-transform: scale3d(0.8, 0.8, 1);
		transform: scale3d(0.8, 0.8, 1);
	}
	85% {
		-webkit-transform: scale3d(1.1, 1.1, 1);
		transform: scale3d(1.1, 1.1, 1);
	}
	100% {
		-webkit-transform: scale3d(1, 1, 1);
		transform: scale3d(1, 1, 1);
	}
}
@keyframes anim-moema-1 {
	60% {
		-webkit-transform: scale3d(0.8, 0.8, 1);
		transform: scale3d(0.8, 0.8, 1);
	}
	85% {
		-webkit-transform: scale3d(1.1, 1.1, 1);
		transform: scale3d(1.1, 1.1, 1);
	}
	100% {
		-webkit-transform: scale3d(1, 1, 1);
		transform: scale3d(1, 1, 1);
	}
}

`

class EditLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      theme: {},
      column: ""
    }
  }
  
  onChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    this.setState(() => ({[property] : value}));
  }

  onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("column", this.state.column);
    this.onCloseModal();
  }
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {

    const { open } = this.state;
    return (
      <FormStyle>
        <button onClick={this.onOpenModal}><FontAwesome data-tip="Hello" style={{color:this.props.color}} name='edit' size='2x'/></button>
        
        <Modal open={open} onClose={this.onCloseModal} center>
          
          <ModalForm>
            <form onSubmit={this.onSubmit}>
              <h2>Edit Page Layout</h2>

              <div className="spacing">
                <label htmlFor="column">Change number of columns</label>
                <input type="number" name="column" min="1" max="3" onChange={this.onChange} autoFocus/>
              </div>

              <button>Submit</button>
            </form>
          </ModalForm>
        </Modal>
      </FormStyle>
    )
    }
  }


export default EditLayout;