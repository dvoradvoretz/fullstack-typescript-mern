var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Todo from '../../models/todo.js';
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield Todo.find();
        res.status(200).json({ todos });
    }
    catch (error) {
        throw error;
    }
});
const addTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('*************    addTodo       ******************');
        const body = req.body;
        // if (body) {
        const todo = new Todo({
            name: 'test',
            description: 'des',
            status: false,
        });
        // const todo: ITodo = new Todo({
        //     name: body.name,
        //     description: body.description,
        //     status: body.status,
        // });
        const newTodo = yield todo.save();
        const allTodos = yield Todo.find();
        res.status(201).json({ message: 'Todo added', todo: newTodo, todos: allTodos });
    }
    catch (error) {
        throw error;
    }
});
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateTodo = yield Todo.findByIdAndUpdate({ _id: id }, body);
        const allTodos = yield Todo.find();
        res.status(200).json({
            message: 'Todo updated',
            todo: updateTodo,
            todos: allTodos,
        });
    }
    catch (error) {
        throw error;
    }
});
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedTodo = yield Todo.findByIdAndRemove(req.params.id);
        const allTodos = yield Todo.find();
        res.status(200).json({
            message: 'Todo deleted',
            todo: deletedTodo,
            todos: allTodos,
        });
    }
    catch (error) {
        throw error;
    }
});
export { getTodos, addTodo, updateTodo, deleteTodo };
