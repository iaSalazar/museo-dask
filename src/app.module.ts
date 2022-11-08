import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MuseumModule } from './museum/museum.module';
import { MuseumEntity } from './museum/museum.entity';
import { ExhibitionModule } from './exhibition/exhibition.module';
import { ExhibitionEntity } from './exhibition/exhibition.entity';
import { ArtworkModule } from './artwork/artwork.module';
import { ArtworkEntity } from './artwork/artwork.entity';
import { ArtistModule } from './artist/artist.module';
import { ArtistEntity } from './artist/artist.entity';
import { SponsorModule } from './sponsor/sponsor.module';
import { SponsorEntity } from './sponsor/sponsor.entity';
import { ImageModule } from './image/image.module';
import { ImageEntity } from './image/image.entity';
import { MovementModule } from './movement/movement.module';
import { MovementEntity } from './movement/movement.entity';

import { TypeOrmModule } from '@nestjs/typeorm';
import { MuseumArtworkModule } from './museum-artwork/museum-artwork.module';

@Module({
  imports: [
    MuseumModule,
    ExhibitionModule,
    ArtworkModule,
    ArtistModule,
    SponsorModule,
    ImageModule,
    MovementModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '2006iaso',
      database: 'museum',
      entities: [
        ArtistEntity,
        ArtworkEntity,
        ExhibitionEntity,
        ImageEntity,
        MovementEntity,
        MuseumEntity,
        SponsorEntity,
      ],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true,
    }),
    MuseumArtworkModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
