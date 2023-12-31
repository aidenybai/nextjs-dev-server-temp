import { B as Block } from './block-ff31fc35.js';
import { P as Props } from './types-35702ad2.js';
import { MillionProps, Options, MillionArrayProps } from './types.js';
import * as preact from 'preact';
import { VNode, ComponentType } from 'preact';
export { r as renderReactScope, u as unwrap } from './utils-93a439aa.js';
import 'react';

declare const REGISTRY: Map<(props: Props) => VNode, <T extends Props>(props?: T | null | undefined, key?: string | undefined, shouldUpdateCurrentBlock?: ((oldProps: Props, newProps: Props) => boolean) | undefined) => Block>;
declare const block: <P extends MillionProps>(fn: ComponentType<P> | null, options?: Options) => (props: P) => VNode<any>;

declare const For: <T>({ each, children }: MillionArrayProps<T>) => preact.VNode<any>;

export { For, REGISTRY, block };
