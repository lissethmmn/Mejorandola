Puls4.Views.Article = Backbone.View.extend({
	events:{

	},
	tagName:"article",
	className:"post",
	initialize : function(modelo){
		//this.$el objeto que tiene el dom de la vista
		console.log(this.$el);

		//this.template = _.template($("#article-template").html());
		this.template = swig.compile($("#article-template").html());
	},
	render : function(){
		var data = this.model.toJSON();

		var html = this.template(data);

		this.$el.html(html);
	}
});