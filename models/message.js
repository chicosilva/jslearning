var fs = require("fs");

class Message {

  constructor(text) {
    this.text = text;
    this._message_list = [];
    
  }
  
  set message_list(val) {

    this._message_list = val;
  }

  get message_list() {
    return this._message_list;
  }

  get text() {
    return this._text;
  }
  
  set text(val) {

    if (!val) { throw new Error("Campo text não pode ser nulo");}
    this._text = val;
  }

  getMessages() {
    
    var data = fs.readFileSync("./models/messages-list.json", "utf8");

    this._message_list = Object.keys(JSON.parse(data));
    
    return this._message_list;
    
  }


}

module.exports = {
  Message
};
