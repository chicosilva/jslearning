class Message{

    constructor(text){
        this.text = text;
    }

    get text(){
        return this._text
    }

    set text(val){
        
        if(!val){
            throw new Error('Campo text não pode ser nulo');
        }

        this._text = val
    }

}

class ImageMessage extends Message{

    constructor(imagem, text){
        super(text)
    }

}

message = new Message("Hello")
imageMessage = new ImageMessage('imagem', 'My Text')

var sayMyNameAndNumbers = (name, ...numbers) => (
    {name: name, numbers: numbers.filter(function(value){
        return value > 6;
    })}
)

console.log(sayMyNameAndNumbers('Paco', 3, 1, 2));
console.log(sayMyNameAndNumbers('Paco', 3, 1, 2, 15, 20));


