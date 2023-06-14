import { useEffect } from 'react';

const RENDER_SCOPE = "slot";
const REACT_ROOT = "__react_root";
const Effect = ({ effect }) => {
  useEffect(effect, []);
  return null;
};

export { Effect as E, RENDER_SCOPE as R, REACT_ROOT as a };
