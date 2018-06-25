function Hello(){
	var name;
	this.setName = function(myName){
		name = myName;
	};
	this.sayName = function(){
		console.log("my name is " + name);
	};
}
module.exports = Hello;