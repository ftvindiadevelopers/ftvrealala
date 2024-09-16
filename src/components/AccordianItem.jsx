
export default function AccordionItem(props) {
    return (
      <div className="accordion-item">
        <h2 className="accordion-header" id={props.accId}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${props.collapseName}`}
            aria-expanded="false"
            aria-controls={props.collapseName}
            > 
            {props.itemHeading}
          </button>
        </h2>
        <div
          id={props.collapseName}
          className={`accordion-collapse collapse ${props.show}`}
          aria-labelledby={props.accId}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body ">
            <div className="accordion-para">
              <p>{props.itemPara}</p>
            </div>
            <div className="accordion-image">
              <img src={props.itemImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  