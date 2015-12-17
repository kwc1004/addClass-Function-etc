function remSpace(str){
	return str.replace(new RegExp('\\s{2,}','g')," ");
}
Object.prototype.hasClass = function(cln){
	return this.className.match(new RegExp('\\b' + cln + '\\b','g'));
}
Object.prototype.addClass = function(cln){
   this.className += " " + cln;
   this.className = this.className.trim();
  
};
Object.prototype.removeClass = function(cln){
	if(this.hasClass(cln)){
		var patt = new RegExp('\\b'+cln+'\\b','g');
		this.className = remSpace(this.className.replace(patt,"")).trim();
	}
};