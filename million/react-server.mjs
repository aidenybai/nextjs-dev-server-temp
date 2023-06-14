import { useReducer, useEffect, createElement } from 'react';
import { R as RENDER_SCOPE } from './chunks/constants2.mjs';
export { r as renderReactScope } from './chunks/utils.mjs';
import 'react-dom/client';

let millionModule;
const block = (Component) => {
  let blockFactory;
  function MillionBlockLoader(props) {
    useEffect(() => {
      const importSource = async () => {
        millionModule = await import('./react.mjs');
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
      return createElement(
        Component,
        props
      );
    }
    return createElement(blockFactory, props);
  }
  return MillionBlockLoader;
};
function For(props) {
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  useEffect(() => {
    const importSource = async () => {
      millionModule = await import('./react.mjs');
      forceUpdate();
    };
    try {
      void importSource();
    } catch (e) {
      throw new Error("Failed to load Million library");
    }
  }, []);
  if (millionModule) {
    return createElement(millionModule.For, props);
  }
  return createElement(RENDER_SCOPE, null, ...props.each.map(props.children));
}

export { For, block };
