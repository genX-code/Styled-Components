import React from 'react';
import Modal from 'react-responsive-modal';
import FontAwesome from "react-fontawesome";
import styled from "styled-components";
import ReactTooltip from 'react-tooltip'

const FormStyle = styled.div`
  position: absolute;
  width: 10rem;
  height: 10rem;
  right: 0;

  button {

    transition: .2s ease-in;

    &:hover {
      transform: scale(1.2);
    }
  }

`
class EditLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      color: "",
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
        <button onClick={this.onOpenModal}><FontAwesome data-tip="Hello" style={{color:"#fff"}} name='edit' size='3x'/></button>
        
        <Modal open={open} onClose={this.onCloseModal} center>
          
        <form className="edit-form" onSubmit={this.onSubmit}>
            
            <h2>Edit Page Layout</h2>

            <div className="spacing input-effect">
              <input className="effect" type="number" min="1" max="3" />
              <label># of columns</label>
              <span className="focus-border"></span>
            </div>

            <button>Submit</button>
            
        </form>

        </Modal>
      </FormStyle>
    )
    }
  }


export default EditLayout;