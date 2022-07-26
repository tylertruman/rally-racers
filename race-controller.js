import { AppState } from "./app-state.js";
console.log('controller loaded');
console.log(AppState)

function _drawRacers(){
    let racers = AppState.racers
    let template = ''
    racers.forEach(racer => template += racer.Template)
    document.getElementById('racers').innerHTML = template
    console.log(template)
}



class Controller{
    constructor(){
        _drawRacers()
        
    }

    // startRace(){
    // let racers = AppState.racers
    // racers.forEach(racer => racer.distance += 1)
    // _drawRacers()
    // setInterval(_moveRacers, 100)
    // }

}

let controller = new Controller()

window['app'] = {controller : controller}