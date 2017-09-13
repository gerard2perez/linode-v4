class Linode {
	@methods('get', 'post')
	domains(){

	}
}


//
// function domains (id = null) {
// 	return this.methods;
// }
//
// function records ( id = null)  {
//
// }

function methods (...methods) {
	return function(target, key, descriptor) {
		console.log(target, key, methods);
		target[key].methods = methods;
	}
}
 export default Linode;
