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

module.exports = {
    Message: Message
}
