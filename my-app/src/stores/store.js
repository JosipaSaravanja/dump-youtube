import { writable } from 'svelte/store';

let data=['data1', 'data2']

export const list = writable(data);
