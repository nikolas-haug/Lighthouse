import React from "react";
import Button from "./Button";
import Input from "./Input";
import Results from "./Results";
// import { PromiseProvider } from "mongoose";

const Services = (props) => (

  <div>

    <div>
      <h1 className="text-center">Service Finder</h1>
      {/* <p>
        Lorem ipsum dolor sit amet, est ut enim consequat. Nostrum fastidii partiendo sed ne, no mutat
        ludus aperiri mea, per in choro dolorem electram. Invidunt reprimique assueverit quo ne,
        eruditi graecis pro ut. Usu ut diceret scaevola evertitur, appareat voluptatibus ad vel.
      </p> */}

      <form onSubmit={props.handleFormSubmit}>
        <Input />
        <Button />
      </form>

      {/* <Input handleInputChange={props.handleInputChange} search={props.search}/>
      <Button handleButtonClick={props.handleButtonClick}/> */}

    </div>

    <div>
      <Results />
    </div>

  </div>

);

export default Services;