function Auto(model, type) {
    this.model = model;
    // this.type = type;
    let autoType = type;
    
    this.info = function() {
        console.log(`Модель авто ${this.model}, тип авто ${autoType}.`);
    };

    this.getInfo = function() {
        return autoType;
    };

    this.setInfo = function(type) {
        // if (typeof age === String) {
            autoType = type;
        // } else {
        //     console.log("ошибОЧКА");
        // }
    };
}


let lada = new Auto('ВАЗ 2114','хачбек');
console.log(lada.type);
console.log(lada.getInfo());
lada.setInfo('универсал');
console.log(lada.getInfo());
lada.info();