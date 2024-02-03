// 
import RandomMultiply from "../../utils/RandomMultiply";
import { MouseEvent } from "./types";

class MouseMoveEngine {
    distance: number = 0;
    area: string;
    start: {x: number, y: number} = {x: 0, y: 0};
    end: {x: number, y: number} = {x: 0, y: 0};

    distanceFn: { [key: string]: (x: number, y: number) => { x: number, y: number } } = {
        leftTop: (x: number, y: number) => {
            const newX = x;
            const newY = -y;

            return { x: newX, y: newY };
        },
        rightTop: (x: number, y: number) => {
            const newX = x;
            const newY = y;

            return { x: newX, y: newY };
        },
        leftBottom: (x: number, y: number) => {
            const newX = -x;
            const newY = -y;

            return { x: newX, y: newY };
        },
        rightBottom: (x: number, y: number) => {
            const newX = -x;
            const newY = y;

            return { x: newX, y: newY };
        }
    };

    constructor() { }

    down(e: MouseEvent) {
        this.start.x = e.clientX;
        this.start.y = e.clientY;
        this.distance = 0;
    }

    up(e: MouseEvent) {
        this.end.x = e.clientX;
        this.end.y = e.clientY;

        const sum = Math.abs(this.end.x - this.start.x) + Math.abs(this.end.y - this.start.y);

        return sum === 0 ? this.distance : this.distance + sum * RandomMultiply();
    }

    move(e: MouseEvent) {
        this.getArea(e.clientX, e.clientY);
        const calcDistance: { x: number, y: number } = this.distanceFn[this.area](e.movementX, e.movementY);
        const newDistance = (calcDistance.x + calcDistance.y) / 2;
        this.distance = this.distance + newDistance;

        return newDistance;
    }

    getArea(x: number, y: number) {
        if (x > window.innerWidth / 2) {
            if (y > window.innerHeight / 2) {
                this.area = 'rightBottom';
            } else {
                this.area = 'rightTop';
            }
        }
        else {
            if (y > window.innerHeight / 2) {
                this.area = 'leftBottom';
            } else {
                this.area = 'leftTop';
            }
        }
    }
};

export default MouseMoveEngine;