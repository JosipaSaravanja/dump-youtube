import { writable } from 'svelte/store';
import { browser } from '$app/environment';

let data=['data1', 'data2']

export const list = writable(data);

if(browser && JSON.parse(window.localStorage.getItem('list'))){
	data =JSON.parse(window.localStorage.getItem('list'))
}else{
	data =[]
}

export const todos = writable(data);

todos.subscribe((value) => {
	if (browser) {
		localStorage.setItem('list', JSON.stringify(value));
	}
});
