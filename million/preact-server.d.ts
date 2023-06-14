import * as preact from 'preact';
import { ComponentType, ComponentProps } from 'preact';
export { r as renderPreactScope } from './utils-93a439aa.js';
import './types-35702ad2.js';

declare const block: (Component: ComponentType<any>) => (props: ComponentProps<any>) => preact.VNode<any>;
declare function For(props: {
    each: any[];
    children: (item: any, index: number) => any;
}): preact.VNode<any>;

export { For, block };
