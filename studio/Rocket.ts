// import Astronaut
import {Astronaut} from './Astronaut';
import {Cargo} from './Cargo';
import {Payload} from './Payload'

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] =[];

   constructor(name: string, totalCapacityKg: number) {
    this.name = name;  
    this.totalCapacityKg = totalCapacityKg;
      
   }

   sumMass(items: Payload[]): number {
    //Returns the sum of all items using each item's massKg property
    let total: number = 0; 
        for (let i=0; i<items.length; i++) {
            total+=items[i].massKg;
        }
    return total;
   }

    currentMassKg(): number {

        return this.sumMass(this.cargoItems)  + this.sumMass(this.astronauts);
    }

    canAdd(item: Payload): boolean {
        // if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
        //     return true;
        // } else {
        //     return false;
        // }

        return (this.currentMassKg() + item.massKg <= this.totalCapacityKg);

    }

    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo)
            return true;
        } else {
            return false;

        }

    }

    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut)
            return true
        } else {
            return false
        }

    }
 }