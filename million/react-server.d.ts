import * as react from 'react';
import { ComponentType } from 'react';
import { MillionProps, MillionArrayProps } from './types.js';
export { r as renderReactScope } from './utils-23e729ca.js';
import './block-ff31fc35.js';
import './types-35702ad2.js';

declare const block: <P extends MillionProps>(Component: ComponentType<P>) => (props: P) => react.DetailedReactHTMLElement<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> | react.ReactElement<P, string | react.JSXElementConstructor<any>>;
declare function For<T>(props: MillionArrayProps<T>): react.FunctionComponentElement<MillionArrayProps<T>> | react.DetailedReactHTMLElement<react.HTMLAttributes<HTMLElement>, HTMLElement>;

export { For, block };
