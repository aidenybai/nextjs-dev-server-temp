import { B as Block, b as block } from './block-ff31fc35.js';
import { P as Props } from './types-35702ad2.js';
import { ReactNode } from 'react';

type MillionProps = Record<string, string | number | boolean | null | undefined | Block | symbol | bigint>;
interface Options {
    shouldUpdate?: (oldProps: Props, newProps: Props) => boolean;
    block?: any;
}
interface MillionArrayProps<T> {
    each: T[];
    children: (value: T, i: number) => ReactNode;
}
interface ArrayCache<T> {
    each: T[] | null;
    children: T[] | null;
    block?: ReturnType<typeof block>;
}

export { ArrayCache, MillionArrayProps, MillionProps, Options };
