export declare class UpdateTodoDto {
    title?: string;
    description?: string;
    priority?: 'low' | 'medium' | 'high';
    completed?: boolean;
    dueDate?: Date;
}
