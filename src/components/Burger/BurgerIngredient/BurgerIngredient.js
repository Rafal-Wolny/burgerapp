import React from "react";
import CSSModules from "./BurgerIngredient.css";
import PropTypes from "prop-types";

const burgerIngeriendt = props => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={CSSModules.BreadBottom} />;
      break;
    case "bread-top":
      ingredient = (
        <div className={CSSModules.BreadTop}>
          <div className={CSSModules.Seeds1} />
          <div className={CSSModules.Seeds2} />
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={CSSModules.Meat} />;
      break;
    case "cheese":
      ingredient = <div className={CSSModules.Cheese}> </div>;
      break;
    case "salad":
      ingredient = <div className={CSSModules.Salad}> </div>;
      break;
    case "bacon":
      ingredient = <div className={CSSModules.Bacon}> </div>;
      break;
    default:
      ingredient = null;
  }

  return ingredient;
};

burgerIngeriendt.propTypes = {
  type: PropTypes.string.isRequired
};

export default burgerIngeriendt;
