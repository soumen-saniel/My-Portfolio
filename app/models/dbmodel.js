// load mongoose since we need it to define a model

var mongoose = require('mongoose');
//-----------------------------------------------------------------------------------------------
//Hemo Schema
//-----------------------------------------------------------------------------------------------
var heroSchema = mongoose.Schema(
    {
        image: { type: String, required: true },
        text: { type: String, required: true }
    },
    {
	    timestamps: true
	},
    {
    	collection: 'heroSection'
    }
);

var hero = mongoose.model('heroSection', heroSchema);
//-----------------------------------------------------------------------------------------------
//Portfolio Schema
//-----------------------------------------------------------------------------------------------
var projectMainSchema = mongoose.Schema(
	{
		name : { type: String, required: true },
		overview : { type: String, required: true },
		technology : { type: [String], required: true },
		url : String,
		category : { type: String, required: true },
		client : String,
		role : { type: String, required: true },
		complete : { type: Boolean, required: true },
		image : { type: String, required: true }
	},
	{
	    timestamps: true
	},
	{
    	collection: 'projectMain'
    }	
);
var projectSubSchema = mongoose.Schema(
	{
		image : { type: String, required: true },
		key : {type: String, required: true},
		name : {type: String, required: true},
		description : { type: String, required: true }
	},
	{
	    timestamps: true
	},
	{
    	collection: 'projectSub'
    }	
);
var portfolioMain = mongoose.model('projectMain', projectMainSchema);
var portfolioSub = mongoose.model('projectSub', projectSubSchema);
//-----------------------------------------------------------------------------------------------
//Exports
//-----------------------------------------------------------------------------------------------
module.exports = {
	hero : hero,
	portfolioMain : portfolioMain,
	portfolioSub : portfolioSub
};