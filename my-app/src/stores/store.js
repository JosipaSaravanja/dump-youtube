import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { v4 as uuidv4 } from 'uuid';	

let data=[]

if(browser && JSON.parse(window.localStorage.getItem('list'))){
	data =JSON.parse(window.localStorage.getItem('list'))
}else{
	data =[]
}

export const list = writable(data);

list.subscribe((value) => {
	if (browser) {
		localStorage.setItem('list', JSON.stringify(value));
	}
});

export const addTodo = (text) => {
	list.update((currentlist) => {
		return [...currentlist, { id: uuidv4(), text: text, isFinished: false}];
	});
};

export const deleteTodo = (id) => {
	list.update((currentlist) => {
		return currentlist.filter((todo) => todo.id !== id);
	});
};
export const completeTodo = (id) => {
	list.update((currentTodos) => {
		return currentTodos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, isFinished: !todo.isFinished };
			}
			return todo;
		});
	});
}