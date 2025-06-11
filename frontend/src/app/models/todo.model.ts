export interface Todo {
  id: string;
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateTodoDto {
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
}

export interface UpdateTodoDto {
  title?: string;
  description?: string;
  priority?: 'low' | 'medium' | 'high';
  completed?: boolean;
  dueDate?: Date;
}