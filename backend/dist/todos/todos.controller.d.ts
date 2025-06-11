import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    create(createTodoDto: CreateTodoDto): import("./entities/todo.entity").Todo;
    findAll(): import("./entities/todo.entity").Todo[];
    findOne(id: string): import("./entities/todo.entity").Todo;
    update(id: string, updateTodoDto: UpdateTodoDto): import("./entities/todo.entity").Todo;
    remove(id: string): void;
}
