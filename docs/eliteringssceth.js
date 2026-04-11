// static data
_treasuryData = {};
{
    // Main Meta
    const TREASURY_TOKEN_TICKER = "eliteRingsScETH";
    const TREASURY_TOKEN_NAME = "eliteRingsScETH";
    const TREASURY_TOKEN_LONGNAME = "eliteRingsScETH";

	// Special Notes, separated by backticks
	const TREASURY_NOTES = [
		`Track Assets Under Management on <a target="_blank" href="https://debank.com/profile/0xf5bd0ffbf62294f067689e2cbcd10d473c7a6d8b">0xf5bd0ffbf62294f067689e2cbcd10d473c7a6d8b</a>, including proof-of-reserves for public sub-protocols.` ,
		`Token Supply number represents only issued the supply not held by Treasury. It is not Circulating supply, neither Total Supply or Unlocked supply, but only the Supply that is externally owned by anyone else, excluding the Treasury itself.` ,
	]

	// Address list
	const TREASURIES_LIST= [
		["0xB5Ac0a44AFa382c4fBF94aB168F108Aa1721c436","Main"],
	]

	// [ wen, marketPrice, classA, classB, classC, supply ]
	const TADATA = [
		[
			"2025-04-08",
			1098,
			1000*(	30 ),
			1000*(	0 ) ,
			1000*(	0  ) ,
			31.7714
		],
		[
			"2026-04-08",
			1139,
			1000*(	32 ),
			1000*(	0 ) ,
			1000*(	0  ) ,
			31.7714
		],

	]

	_treasuryData = {
		TREASURY_TOKEN_TICKER,
		TREASURY_TOKEN_NAME,
		TREASURY_TOKEN_LONGNAME,
		TREASURY_NOTES,
		TREASURIES_LIST,
		TADATA
	}
}

const ELITERINGSSCETH = _treasuryData;
_treasuryData = {};