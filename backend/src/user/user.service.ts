import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { IDatabase } from 'pg-promise';

@Injectable()
export class UserService {
  constructor(
    @Inject('DATABASE_CONNECTION') private readonly db: IDatabase<any>,
  ) {}

  async getUsers(): Promise<any[]> {
    return this.db.any('SELECT * FROM users');
  }

  async getUserById(id: number): Promise<any> {
    const user = await this.db.oneOrNone('SELECT * FROM users WHERE id = $1', [id]);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async addUser(nom: string, prenom: string, email: string): Promise<any> {
    return this.db.one(
      'INSERT INTO users(nom, prenom, email) VALUES($1, $2, $3) RETURNING *',
      [nom, prenom, email],
    );
  }

  async updateUser(id: number, nom: string, prenom: string, email: string): Promise<any> {
    const user = await this.db.oneOrNone(
      'UPDATE users SET nom = $1, prenom = $2, email = $3 WHERE id = $4 RETURNING *',
      [nom, prenom, email, id],
    );
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async deleteUser(id: number): Promise<any> {
    const user = await this.db.oneOrNone(
      'DELETE FROM users WHERE id = $1 RETURNING *',
      [id]
    );
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }
}
