import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomButton from "./components/CustomButton/CustomButton.js";
import Popup from "./components/Popup/Popup.js";
import {Container, Row, Col} from "reactstrap";

function App() {
  const [text, setText] = useState("Click");
  const [popClass, setpopClass] = useState('none')
  let buttonClick = (e) => {
    e.target.className = "warnMessage";
    setText("Clicked");
  };
  let buttonHover = () => {
    setpopClass('block')
  };
  let buttonLeave = () => {
    setpopClass('none')
  };
  return (
    <div className="App">
      <Container>
      <Row>
        <Col>
          <CustomButton text={text} hint="hint" buttonClick={buttonClick} buttonHover={buttonHover} buttonLeave = {buttonLeave}/>
          <Popup popClass = {popClass}/>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
