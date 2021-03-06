import { DwenguinoComponent, DwenguinoComponentTypesEnum } from './DwenguinoComponent.js';

export { Sonar }

class Sonar extends DwenguinoComponent{
    constructor(){
        super();
    }

    toString(){
        return 'Sonar';
    }

    static getType(){
        return DwenguinoComponentTypesEnum.SONAR;
    }

    static getDescription(){
        return MSG.simulator['sonarDescription'];
    }

    static getInputPins(){
        return ['trigger'];
    }

    static getOutputPins(){
        return ['echo'];
    }
}