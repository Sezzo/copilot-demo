export declare class CreateTodoDto {
    title: string;
    description?: string;
    priority: 'low' | 'medium' | 'high';
    dueDate?: Date;
}
