class Car {
    constructor(WIDTH, HEIGHT, x = WIDTH / 2, y = HEIGHT / 2) {
        const $cars = document.querySelector('.cars');

        var $el = document.createElement('div');
        $el.classList.add('car');

        const $body = document.createElement('div');
        $el.classList.add('car-body');

        const $roof = document.createElement('div');
        $el.classList.add('car-roof');

        $body.appendChild($roof);
        $el.appendChild($body);
        $cars.appendChild($el);

        this.localCar = {
            x: x != undefined ? x : WIDTH / 2,
            y: y != undefined ? y : HEIGHT / 2
        }
    }

    render() {

    }

    update() {

    }
}