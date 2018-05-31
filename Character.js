

function Character(strName, iTHLevel)
{
	var retval=
	{
		Name:"",
		Realm:0,
		TH:0,		
		BrewForMonsterAttack:[-1,-1,-1,-1,-1,-1,-1,-1,-1],
		HospitalCap:0,
		HospitalCapBonusPercent:0,
		GarrisonCap:5000,
		GarrisonCapBonusPercent:0,
		EnergyRegn:0.6,
		EnergyRegenBonusPercent:0,
	};
	if(strName!=undefined){	retval["Name"]=strName;	}
	if(iTHLevel!=undefined){	retval["TH"]=parseInt(iTHLevel);	}
	return retval;
}


var oCharacters={};
function GetCharacterByName(strName){	return oCharacters[strName];	}
function AddCharacter(strName, iTHLevel)	{	oCharacters[strName]=new Character(strName, iTHLevel);	}
function GetCharacterNames()
{
	var retval=[];
	for(var CharacterName in oCharacters) 	{		retval.push(CharacterName);	}
	return retval;
}
function SaveAllCharacters()
{
	localStorage.setItem("oCharacters", oCharacters);
}
function LoadAllCharacters()
{
	oCharacters = (localStorage.getItem("oCharacters")||{});
}

/*
class CharacterClass
{
	static getDefaultGarrisonCap(){ return 5000; }
	static getDefaultEnergyRegn(){ return 0.6; }
  constructor(strName,iTHLevel) 
  {
    this.Name = (strName||"");
    var tempTH=parseInt(iTHLevel);
    this.TH = (!isNaN(tempTH))?tempTH:0;
    this.BrewForMonsterAttack = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
		this.HospitalCap = 0;
		this.HospitalCapBonusPercent = 0;
		this.GarrisonCap = getDefaultGarrisonCap();
		this.GarrisonCapBonusPercent = 0;
		this.EnergyRegn = getDefaultEnergyRegn();
		this.EnergyRegenBonusPercent=0;
  }
  ToObject()
  {
  	var retval={}; //fill in everything!
  	return retval;
  }
  static CreateFromObject(oCharacter)
  {
  	var strName=oCharacter["Name"];
  	if(strName!=undefined)
  	{
  		var retval =new CharacterClass(strName,oCharacter["TH"]);
  	}
  }
}; //end of class
*/
