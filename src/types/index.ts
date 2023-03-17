export type TodoType = {
	id: string
	text: string
	status: boolean
}

export type TodoContainerPropsType = {
	todolist: TodoType[]
	titleContainer: string
	updateTodo: (id: string, checked: boolean) => void
	deleteTodo: (id: string) => void
}
