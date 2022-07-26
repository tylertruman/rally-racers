export class Racer{
    constructor(name, picture, number, distance){
    this.name = name
    this.picture = picture
    this.number = number
    this.distance = distance
}

get Template(){
    return
    `<div class="col-12 bg-warning mt-4">
    <span class="marker${this.distance}" id="${this.number}">${this.picture}</span>
</div>`
}

}