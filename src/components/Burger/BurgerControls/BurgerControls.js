import React from "react";
import classes from "./BurgerControls.css";
import BurgerControl from "./BurgerControl/BurgerControl";
const controlers = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];
const controls = props => {
  return (
    <div className={classes.BurgerControls}>
      {controlers.map(ctrl => (
        <BurgerControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemove(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
    </div>
  );
};

export default controls;
