import { Container, inject, injectable } from "inversify";
const Types = {
  IPassService: Symbol.for("IPassService"),
  IJwtService: Symbol.for("IJwtService"),
};
interface IPassService {
  hashPass(pass: string): string;
}
interface IJwtService {
  createToken(hashedPass: string): string;
}

@injectable()
class LoginUseCase {
  constructor(
    @inject(Types.IPassService)
    public readonly passService: IPassService,
    @inject(Types.IJwtService)
    public readonly jwtService: IJwtService
  ) {
    this.jwtService = jwtService;
    this.passService = passService;
  }
  execute(pass: string) {
    const hashedPass = this.passService.hashPass(pass);
    const token = this.jwtService.createToken(hashedPass);
    return token;
  }
}
@injectable()
class PassService implements IPassService {
  hashPass(pass: string): string {
    return "hashedpass";
  }
}
@injectable()
class JwtService implements IJwtService {
  createToken(hashedPass: string): string {
    return "genToken";
  }
}

const container = new Container();
container.bind(LoginUseCase).to(LoginUseCase);
container.bind<IPassService>(Types.IPassService).to(PassService);
container.bind<IJwtService>(Types.IJwtService).to(JwtService);

const loginUser = container.get(LoginUseCase);
console.log(loginUser.execute("pass"));
