import { RegisterUserUseCase } from "../Application/UseCase/RegisterUserUseCase";
import { RegisterUserController } from "./Controller/RegisterUserController";
import { UserMongoRepository } from "./Repository/UserMongoRepository";
import { UserMysqlRepository } from "./Repository/UserMysqlRepository";
import { UserSqliteRepository } from "./Repository/UserSqliteRepository";

let mysqlRepository = new UserMysqlRepository();
let mongoRepository = new UserMongoRepository();
let sqliteRepository = new UserSqliteRepository();

let currentRepository = sqliteRepository;

let registerUserUseCase = new RegisterUserUseCase(currentRepository);

export const registerUserController = new RegisterUserController(registerUserUseCase);