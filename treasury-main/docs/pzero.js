// static data
_treasuryData = {};
{
    // Main Meta
    const TREASURY_TOKEN_TICKER = "PZERO";
    const TREASURY_TOKEN_URLNAME = "protocol-zero.ai";
    const TREASURY_TOKEN_LONGNAME = "Protocol Zero";

	// Special Notes, separated by backticks
	const TREASURY_NOTES = [
		`Track Assets Under Management on <a target="_blank" href="https://debank.com/profile/0x5053776b2111809aa4b308f1f6417e65f8aaba1e">0x5053776b2111809aa4b308f1f6417e65f8aaba1e</a>, including proof-of-reserves for public sub-protocols.` ,
		`Token Supply number represents only issued the supply not held by const TREASURy. It is not Circulating supply, neither Total Supply or Unlocked supply, but only the Supply that is externally owned by anyone else, excluding the const TREASURy itself.` ,
		`At launch, 8_003_583 fBOMB tokens were loaned from Millennium Club Treasury, and are thus deducted from net assets.`
	]

	// Address list
	const TREASURIES_LIST= [
		["0x5053776b2111809aa4b308f1f6417e65f8aaba1e","Main multisig"],
	]

	// [ wen, marketPrice, classA, classB, classC, supply ]
	const TADATA = [
		[
			"2026-02-27",
			0.000165,
			1000*(	0 ),
			1000*(	(10_637_230 -8_003_583)*0.011749/1000 + 3.8 ) ,
			1000*(	0  ) ,
			1_000_000_000 - 749_099_027
		],
		[
			"2026-03-15",
			0.000291,
			1000*(	0 ),
			1000*(	(13_631_838 -8_003_583)*0.01245/1000 + 7.7 + 7.1 ) ,
			1000*(	0  ) ,
			1_000_000_000 - 587_959_103
		],
		[
			"2026-04-08",
			0.000252,
			1000*(	0 ),
			1000*(	(13_359_452 -8_003_583)*0.011625/1000 + 2.1 + 3.35 ) ,
			1000*(	0  ) ,
			1_000_000_000 - 599_919_883
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

const PZERO  = _treasuryData;
_treasuryData = {};