import { TaskI } from './task/task.interface';

export interface AppStateI {
    readonly tasks: TaskI[];
}