module.exports = (function(){
	function Test(){

	}


	Test.prototype.log = function(){
		console.log('it works');
	};

	return Test;

})();