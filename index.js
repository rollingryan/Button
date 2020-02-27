import React from "react";
import PropTypes from "prop-types";

const Button = ({
  onClick,
  children,
  theme,
  colour,
  inverse,
  type,
  className,
  isActive,
  testSelector,
  ...attributes
}) => (
  <button
    data-test={testSelector}
    onClick={onClick}
    className={`button ${(theme && `button--${theme}`) || ""} ${(colour &&
      `button--${colour}`) ||
      ""} ${(inverse && "button--inverse") || ""} ${(isActive &&
      "button--active") ||
      ""} ${className}`}
    type={type}
    {...attributes}
  >
    <span className="button__text">{children}</span>
  </button>
);

Button.propTypes = {
  /** onClick function */
  onClick: PropTypes.func,
  /** React children */
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string
  ]),
  /** theme string */
  theme: PropTypes.string,
  /** colour string */
  colour: PropTypes.string,
  /** inverse boolean */
  inverse: PropTypes.bool,
  /** type string */
  type: PropTypes.string,
  /** className string */
  className: PropTypes.string,
  /** isActive boolean */
  isActive: PropTypes.bool,
  /** testSelector string */
  testSelector: PropTypes.string,
  /** object of key/value pairs of string type */
  attributes: PropTypes.shape({
    x: PropTypes.string
  })
};

Button.defaultProps = {
  onClick: () => {},
  children: "",
  theme: "",
  colour: "",
  inverse: false,
  type: "button",
  className: "",
  isActive: false,
  testSelector: "",
  attributes: undefined
};

export default Button;
