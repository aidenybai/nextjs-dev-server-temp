import * as react from 'react';
import { ReactNode, ComponentType } from 'react';
import { B as Block } from './block-ff31fc35.js';
import { P as Props } from './types-35702ad2.js';
import { MillionProps, Options, MillionArrayProps } from './types.js';
export { r as renderReactScope, u as unwrap } from './utils-23e729ca.js';

declare const REGISTRY: Map<(props: Props) => ReactNode, <T extends Props>(props?: T | null | undefined, key?: string | undefined, shouldUpdateCurrentBlock?: ((oldProps: Props, newProps: Props) => boolean) | undefined) => Block>;
declare const block: <P extends MillionProps>(fn: ComponentType<P> | null, options?: Options) => (props: P) => react.FunctionComponentElement<P>;

declare const For: <T>({ each, children }: MillionArrayProps<T>) => react.DetailedReactHTMLElement<react.HTMLAttributes<HTMLElement>, HTMLElement>;

export { For, REGISTRY, block };
