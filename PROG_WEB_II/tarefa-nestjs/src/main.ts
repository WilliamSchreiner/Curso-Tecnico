import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // codigo de função para abilitar mais de um dominio dentro da web
  await app.listen(3100); //Deve trocar de 3000 para algum numero para definir a porta de localhost:XX
}
bootstrap();
