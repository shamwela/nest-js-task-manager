import { Injectable } from '@nestjs/common'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'

@Injectable()
export class TaskService {
  tasks = [
    {
      id: '1',
      title: 'Learn Nest.js',
    },
    {
      id: '2',
      title: 'Learn tRPC',
    },
  ]

  create(createTaskDto: CreateTaskDto) {
    this.tasks.push(createTaskDto)
    return this.tasks
  }

  findAll() {
    return this.tasks
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    // update the task in this class according to the id passed
    return this.tasks.map((task) => (task.id === id ? updateTaskDto : task))
  }
}
