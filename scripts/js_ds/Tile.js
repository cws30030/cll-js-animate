function Tile(id, type, onclick) {
	this._id = id;
	this._type = type;
	this._originalType = this._type;
	
	this.init = function() {
		return '<div class="tile ' + this._type + '" id="' + this._id + '" onclick="' + onclick + '"></div>';
	
	};
	
	this.setType = function(type) {
		$("#" + this._id)[0].className = "tile " + type;
		this._type = type;
	
	};
	
	this.getType = function() {
		return this._type;
	
	};
	
	this.getOriginalType = function() {
		return this._originalType;
	
	};
	
	this.setOriginalType = function(type) {
		if(this._originalType == this._type) this.setType(type);
		
		this._originalType = type;
	
	};
	
	this.resetType = function() {
		this.setType(this._originalType);
		this._type = this._originalType;
	
	};

};
