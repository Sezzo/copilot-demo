import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodosService {
    private todos;
    create(createTodoDto: CreateTodoDto): Todo;
    findAll(): Todo[];
    findOne(id: string): Todo;
    update(id: string, updateTodoDto: UpdateTodoDto): Todo;
    remove(id: string): void;
}
