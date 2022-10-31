import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MuseumEntity } from './museum.entity';
import { MuseumService } from './museum.service';

@Module({
  providers: [MuseumService],
  imports: [TypeOrmModule.forFeature([MuseumEntity])]
})
export class MuseumModule {}

