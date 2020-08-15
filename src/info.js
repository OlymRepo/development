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
		"IOLSamples.pdf",
		"IOL03",
		"IOL04",
		"IOL05",
		"IOL06",
		"IOL07",
		"IOL08",
		"IOL09",
		"IOL08",
		"IOL09",
		"IOL10",
		"IOL11",
		"IOL12",
		"IOL13",
		"IOL14",
		"IOL15",
		"IOL16",
		"IOL17",
		"IOL18",
		"IOL19"
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
	],
	"IOL08":[
		"Back",
		"IOL08Indiv.pdf",
		"IOL08Team.pdf"
	],
	"IOL09":[
		"Back",
		"IOL09Indiv.pdf",
		"IOL09Team.pdf"
	],
	"IOL10":[
		"Back",
		"IOL10Indiv.pdf",
		"IOL10Team.pdf"
	],
	"IOL11":[
		"Back",
		"IOL11Indiv.pdf",
		"IOL11Team.pdf"
	],
	"IOL12":[
		"Back",
		"IOL12Indiv.pdf",
		"IOL12Team.pdf"
	],
	"IOL13":[
		"Back",
		"IOL13Indiv.pdf",
		"IOL13Team.pdf"
	],
	"IOL14":[
		"Back",
		"IOL14Indiv.pdf",
		"IOL14Team.pdf"
	],
	"IOL15":[
		"Back",
		"IOL15Indiv.pdf",
		"IOL15Team.pdf"
	],
	"IOL16":[
		"Back",
		"IOL16Indiv.pdf",
		"IOL16Team.pdf"
	],
	"IOL17":[
		"Back",
		"IOL017Indiv.pdf",
		"IOL17Team.pdf"
	],
	"IOL18":[
		"Back",
		"IOL18Indiv.pdf",
		"IOL18Team.pdf"
	],
	"IOL19":[
		"Back",
		"IOL19Indiv.pdf",
		"IOL19Team.pdf"
	],
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