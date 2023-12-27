import { AuthRepository } from "../repositories/auth.repository";

export class AuthService {
  repository = new AuthRepository();

  getHello = () => this.repository.message
}