'use strict';

const react = require('react');

const RENDER_SCOPE = "slot";
const REACT_ROOT = "__react_root";
const Effect = ({ effect }) => {
  react.useEffect(effect, []);
  return null;
};

exports.Effect = Effect;
exports.REACT_ROOT = REACT_ROOT;
exports.RENDER_SCOPE = RENDER_SCOPE;
