import { React, useState } from "react";
export default function About(props) {

  return (
    <div className="container my-3">
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'grey':'white'}}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{backgroundColor:props.mode==='dark'?'#171542':'white'}}
            >
              <strong className={`text-${props.mode==='dark'?'light':'dark'}`}>  Textutils</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body text-${props.mode==='dark'?'light':'dark'}`}>
              <p>This is the first item's accordion body.It is
              shown by default.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'grey':'white'}}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{backgroundColor:props.mode==='dark'?'#171542':'white'}}
            >
             <strong className={`text-${props.mode==='dark'?'light':'dark'}`}> Use for free</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body text-${props.mode==='dark'?'light':'dark'}`}>
              <p>This is the second item's accordion body.It is
              hidden by default.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'grey':'white'}}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseTthree"
              style={{backgroundColor:props.mode==='dark'?'#171542':'white'}}
            >
             <strong className={`text-${props.mode==='dark'?'light':'dark'}`}> Use It</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body text-${props.mode==='dark'?'light':'dark'}`}>
              <p>This is the second item's accordion body.It is
              hidden by default.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
