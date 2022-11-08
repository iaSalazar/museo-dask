import { Module } from '@nestjs/common';
import { MuseumArtworkService } from './museum-artwork.service';
import { MuseumEntity } from '../museum/museum.entity';
import { ArtworkEntity } from '../artwork/artwork.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MuseumArtworkController } from './museum-artwork.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MuseumEntity, ArtworkEntity])],
  providers: [MuseumArtworkService],
  controllers: [MuseumArtworkController],
})
export class MuseumArtworkModule {}
