import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { TaskService } from './task.service'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto)
  }

  @Get()
  findAll() {
    return this.taskService.findAll()
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateTaskDto) {
    return this.taskService.update(id, body)
  }
}
