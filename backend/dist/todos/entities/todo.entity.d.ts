export declare class Todo {
    id: string;
    title: string;
    description?: string;
    priority: 'low' | 'medium' | 'high';
    completed: boolean;
    dueDate?: Date;
    createdAt: Date;
    updatedAt: Date;
    constructor(title: string, priority: 'low' | 'medium' | 'high', description?: string, dueDate?: Date);
}
