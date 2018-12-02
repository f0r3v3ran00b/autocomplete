import React from "react";
import "./autocomplete.css";

let PossibleMatches = props => {
  return (
    <div className="possible-matches">
      {props
        .possibleMatches
        .map((possibleMatch, idx) => {
          return (
            <div
              key={idx}
              onClick={props
              .handleItemSelect
              .bind(null, idx)}
              className={idx === props.currentlyHighlightedPosition
              ? "highlightedPosition"
              : null}>
              {possibleMatch}
            </div>
          );
        })}
    </div>
  );
};

export default PossibleMatches;
