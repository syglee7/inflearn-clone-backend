import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async getUser() {
    // const user = new User();
    // user.firstName = 'Timber';
    // user.lastName = 'Saw';
    // user.age = 25;
    // await this.userRepository.save(user);
    // await this.userRepository.save({
    //   firstName: 'zena',
    //   lastName: 'lee',
    //   age: 34,
    // });
    // const allUsers = await this.userRepository.find();
    // return allUsers;
    const firstUser = await this.userRepository.findOneBy({
      id: 3,
    }); // find by id

    return firstUser;
    // const timber = await this.userRepository.findOneBy({
    //   firstName: 'Timber',
    //   lastName: 'Saw',
    // }); // find by firstName and lastName
  }
}
