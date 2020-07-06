export class zooAnimal {
  animalType: string = '';
  animalName: string = '';
  dangerLevel: number = 0;
  constructor(init: zooAnimal) {
    Object.assign(this, init);
  }
}