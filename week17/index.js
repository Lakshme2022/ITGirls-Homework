
const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://www.mercedes-benz-mena.com/en/passengercars/mercedes-benz-cars/models/e-class/sedan-w213-fl/explore/_jcr_content/notificationboxes/notificationbox/image.MQ6.12.20211013084329.jpeg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

class Transport {
    constructor(type, brand, price) {
        this.type = type;
        this.brand = brand;
        this.price = price;
    }
    getInfo() {
        return `${this.type} ${this.brand}`;
    }

    getPrice (){
        return `${this.price}`;
    }

}

class Car extends Transport {
    constructor(type, price, brand, doors) {
        super(type, price, brand);
        this.doors = doors;
    }

    getDoorsCount(){
        return `${this.doors} doors`;
    }

}

class Bike extends Transport {
    constructor(type, price, brand, maxSpeed) {
        super(type, price, brand);
        this.maxSpeed = maxSpeed;
    }

    getMaxSpeed(){
        return `${this.maxSpeed} km/h`;
    }

}

const transportObjects = data.map(transport => new Transport(transport.type, transport.brand, transport.price));

const vehicleObjects = data.map(vehicle => {
    if (vehicle.type === 'car'){
        return new Car(vehicle.type, vehicle.brand, vehicle.price, vehicle.doors);
    } else if (vehicle.type === 'bike'){
        return new Bike(vehicle.type, vehicle.brand, vehicle.price, vehicle.maxSpeed);
    }
});

transportObjects.forEach(transport => console.log(transport.getInfo()));

transportObjects.forEach(transport => console.log(transport.getPrice()));

vehicleObjects.forEach(vehicle => {if (vehicle.getDoorsCount) console.log(vehicle.getDoorsCount())});

vehicleObjects.forEach(vehicle => {if (vehicle.getMaxSpeed) console.log(vehicle.getMaxSpeed())});
