import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { CalendarModule } from './calendar/calendar.module';
import { MoodModule } from './mood/mood.module';

@Module({
  imports: [TodosModule, CalendarModule, MoodModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
