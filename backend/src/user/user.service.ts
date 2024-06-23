import { Injectable, Inject } from '@nestjs/common';
import { IDatabase } from 'pg-promise';

@Injectable()
export class UserService {
  constructor(
    @Inject('DATABASE_CONNECTION') private readonly db: IDatabase<any>,
  ) {}

  async getUsers(): Promise<any[]> {
    return this.db.any('SELECT * FROM users');
  }

  async addUser(nom: string, prenom: string, email: string): Promise<any> {
    return this.db.one('INSERT INTO users(nom, prenom, email) VALUES($1, $2, $3) RETURNING *', [nom, prenom, email]);
  }
}
