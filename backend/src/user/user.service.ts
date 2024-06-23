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
}
