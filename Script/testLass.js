class myClass{
  constructor()
  {
    this.a = 21;
  }
  
  getA()
  {
    return this.a;
  }
}

module.exports.myClass = new myClass();