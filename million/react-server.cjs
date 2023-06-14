'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const react = require('react');
const constants = require('./chunks/constants2.cjs');
const utils = require('./chunks/utils.cjs');
require('react-dom/client');

let millionModule;
const block = (Component) => {
  let blockFactory;
  function MillionBlockLoader(props) {
    react.useEffect(() => {
      const importSource = async () => {
        millionModule = await import('./react.cjs');
        if (!blockFactory) {
          blockFactory = millionModule.block(Component);
        }
      };
      try {
        void importSource();
      } catch (e) {
        throw new Error("Failed to load Million library");
      }
      return () => {
        blockFactory = null;
      };
    }, []);
    if (!blockFactory) {
      return react.createElement(
        Component,
        props
      );
    }
    return react.createElement(blockFactory, props);
  }
  return MillionBlockLoader;
};
function For(props) {
  const [_, forceUpdate] = react.useReducer((x) => x + 1, 0);
  react.useEffect(() => {
    const importSource = async () => {
      millionModule = await import('./react.cjs');
      forceUpdate();
    };
    try {
      void importSource();
    } catch (e) {
      throw new Error("Failed to load Million library");
    }
  }, []);
  if (millionModule) {
    return react.createElement(millionModule.For, props);
  }
  return react.createElement(constants.RENDER_SCOPE, null, ...props.each.map(props.children));
}

exports.renderReactScope = utils.renderReactScope;
exports.For = For;
exports.block = block;
