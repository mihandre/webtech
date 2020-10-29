class Robot {
    constructor (name) {
        this.name = name
    }

    move(){
        console.log(`${this.name} is moving`)
    }
}

class Weapon {
    constructor(description){
        this.description = description
    }

    fire(){
        console.log(`${this.description} is firing`)
    }
}

class CombatRobot extends Robot{
    constructor(name){
        super(name)
        this.weapons = []
    }
    
    addWeapon (weapon){
        this.weapons.push(weapon)
    }

    fire(){
        console.log('firing all weapons')
        for (const weapon of this.weapons){
            weapon.fire()
        }
    }

}

const r0 = new Robot("ordinary robot")
r0.move()

const cr0 = new CombatRobot("combat robot")
cr0.fire()
cr0.move()

Robot.prototype.fly = function (){
    console.log(`${this.name} is flying`)
}

cr0.fly()

const f0 = cr0.fly

f0.apply(cr0)

const f1 = f0.bind(r0)
f1()
