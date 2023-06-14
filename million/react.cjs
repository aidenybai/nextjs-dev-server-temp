'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const react = require('react');
const block$1 = require('./chunks/block.cjs');
const constants = require('./chunks/constants.cjs');
const utils = require('./chunks/utils.cjs');
const constants$1 = require('./chunks/constants2.cjs');
require('react-dom/client');

const REGISTRY = new constants.Map$();
const block = (fn, options = {}) => {
  const block2 = constants.MapHas$.call(REGISTRY, fn) ? constants.MapGet$.call(REGISTRY, fn) : fn ? block$1.block(fn, utils.unwrap) : options.block;
  function MillionBlock(props) {
    const ref = react.useRef(null);
    const patch = react.useRef(null);
    utils.processProps(props);
    patch.current?.(props);
    const effect = react.useCallback(() => {
      const currentBlock = block2(props, props.key, options.shouldUpdate);
      if (ref.current && patch.current === null) {
        block$1.queueMicrotask$(() => {
          block$1.mount$.call(currentBlock, ref.current, null);
        });
        patch.current = (props2) => {
          block$1.queueMicrotask$(() => {
            block$1.patch(
              currentBlock,
              block2(props2, props2.key, options.shouldUpdate)
            );
          });
        };
      }
    }, []);
    const marker = react.useMemo(() => {
      return react.createElement(constants$1.RENDER_SCOPE, { ref });
    }, []);
    const vnode = react.createElement(
      react.Fragment,
      null,
      marker,
      react.createElement(constants$1.Effect, { effect })
    );
    return vnode;
  }
  if (!constants.MapHas$.call(REGISTRY, MillionBlock)) {
    constants.MapSet$.call(REGISTRY, MillionBlock, block2);
  }
  return MillionBlock;
};

const MillionArray = ({ each, children }) => {
  const ref = react.useRef(null);
  const fragmentRef = react.useRef(null);
  const cache = react.useRef({
    each: null,
    children: null
  });
  if (fragmentRef.current && each !== cache.current.each) {
    block$1.queueMicrotask$(() => {
      const newChildren = createChildren(each, children, cache);
      block$1.arrayPatch$.call(fragmentRef.current, block$1.mapArray(newChildren));
    });
  }
  react.useEffect(() => {
    if (fragmentRef.current)
      return;
    block$1.queueMicrotask$(() => {
      const newChildren = createChildren(each, children, cache);
      fragmentRef.current = block$1.mapArray(newChildren);
      block$1.arrayMount$.call(fragmentRef.current, ref.current);
    });
  }, []);
  return react.createElement(constants$1.RENDER_SCOPE, { ref });
};
const typedMemo = react.memo;
const For = typedMemo(MillionArray);
const createChildren = (each, getComponent, cache) => {
  const children = Array(each.length);
  const currentCache = cache.current;
  for (let i = 0, l = each.length; i < l; ++i) {
    if (currentCache.each && currentCache.each[i] === each[i]) {
      children[i] = currentCache.children?.[i];
      continue;
    }
    const vnode = getComponent(each[i], i);
    if (constants.MapHas$.call(REGISTRY, vnode.type)) {
      if (!currentCache.block) {
        currentCache.block = constants.MapGet$.call(REGISTRY, vnode.type);
      }
      children[i] = currentCache.block(vnode.props);
    } else {
      const block = block$1.block((props) => {
        return {
          type: constants$1.RENDER_SCOPE,
          props: { children: [props?.__scope] }
        };
      });
      const currentBlock = (props) => {
        return block({
          props,
          __scope: utils.renderReactScope(react.createElement(vnode.type, props))
        });
      };
      constants.MapSet$.call(REGISTRY, vnode.type, currentBlock);
      currentCache.block = currentBlock;
      children[i] = currentBlock(vnode.props);
    }
  }
  currentCache.each = each;
  currentCache.children = children;
  return children;
};

exports.renderReactScope = utils.renderReactScope;
exports.unwrap = utils.unwrap;
exports.For = For;
exports.REGISTRY = REGISTRY;
exports.block = block;
