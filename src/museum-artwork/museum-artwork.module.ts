import { Module } from '@nestjs/common';
import { MuseumArtworkService } from './museum-artwork.service';
import { MuseumEntity } from '../museum/museum.entity';
import { ArtworkEntity } from '../artwork/artwork.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MuseumEntity, ArtworkEntity])],
  providers: [MuseumArtworkService]
})
export class MuseumArtworkModule {}
