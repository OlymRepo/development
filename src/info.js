import React from 'react';
var next = {
	"master":[
		"Linguistics"
	],
	"Linguistics":[
		"Back",
		"IOL",
		"PLO"
	],
	"PLO":[
		"Back",
		"PLO11",
		"PLO12",
		"PLO13"
	],
	"PLO11":[
		"Back",
		"BariaiSquares.pdf",
		"CheesyMalagasy.pdf",
		"TheNorwegianFamily.pdf",
		"TiwaSentences.pdf",
		"VietNam.pdf"
	],
	"PLO12":[
		"Back",
		"BronkHorst.pdf",
		"CopticStress.pdf",
		"DailyBasque.pdf",
		"NotAmharic.pdf"
	],
	"PLO13":[
		"Back",
		"AchuiFamily.pdf",
		"AkhamShop.pdf",
		"DaysInJapanese.pdf",
		"GiggleMeThis.pdf",
		"HebrewPronounsJr.pdf",
		"HebrewPronounsSr.pdf",
		"SimteVerbs.pdf",
		"TangkhulAdj.pdf",
		"WhatIsInAQuestion.pdf"
	],
	"IOL":[
		"Back",
		"IOL03",
		"IOL04",
		"IOL05",
		"IOL06",
		"IOL07"
	],
	"IOL03":[
		"Back",
		"IOL03Indiv.pdf",
		"IOL03Team.pdf"
	],
	"IOL04":[
		"Back",
		"IOL04Indiv.pdf",
		"IOL04Team.pdf"
	],
	"IOL05":[
		"Back",
		"IOL05Indiv.pdf",
		"IOL05Team.pdf"
	],
	"IOL06":[
		"Back",
		"IOL06Indiv.pdf" // no team
	],
	"IOL07":[
		"Back",
		"IOL07Indiv.pdf",
		"IOL07Team.pdf"
	]
}

//------------------------------------------------------------


class Emoji extends React.Component{
	icons = {
		world: "🌍",
		india: "🇮🇳",
		usa: "🇺🇸",
		canada: "🇨🇦",
		ireland: "🇮🇪",
		uk: "🇬🇧",
		australia: "🇦🇺"
	};
	render()
	{
		return(
			<span type = "img" aria-label = {this.props.name}>
				{this.icons[this.props.name]}
			</span>
		);
	}
}
export{next, Emoji};