// static data

    // Main Meta
    TREASURY_TOKEN_TICKER = "theSTRAT";
    TREASURY_TOKEN_NAME = "thestrat.mclb.org";
    TREASURY_TOKEN_LONGNAME = "Thena Strategy";

	// Special Notes, separated by backticks
	TREASURY_NOTES = [
		`Track Assets Under Management on <a target="_blank" href="https://debank.com/profile/0x5053776b2111809aa4b308f1f6417e65f8aaba1e">0x5053776b2111809aa4b308f1f6417e65f8aaba1e</a>, including proof-of-reserves for public sub-protocols.` ,
		`Token Supply number represents only issued the supply not held by Treasury. It is not Circulating supply, neither Total Supply or Unlocked supply, but only the Supply that is externally owned by anyone else, excluding the Treasury itself.` ,
	]

	// Address list
	TREASURIES_LIST= [
		["0x5053776b2111809aa4b308f1f6417e65f8aaba1e","Main multisig"],
	]

	// [ wen, marketPrice, classA, classB, classC, supply ]
	TADATA = [
		[
			"2026-02-27",
			0.000165,
			1000*(	0 ),
			1000*(	124.8 + 3.8 ) ,
			1000*(	0  ) ,
			1_000_000_000 - 749_099_027
		],
		[
			"2026-03-15",
			0.000291,
			1000*(	0 ),
			1000*(	7.7 + 169.7 + 7.1 ) ,
			1000*(	0  ) ,
			1_000_000_000 - 587_959_103
		],
		[
			"2026-04-08",
			0.000252,
			1000*(	0 ),
			1000*(	2.1 + 155.8 + 3.35 ) ,
			1000*(	0  ) ,
			1_000_000_000 - 599_919_883
		],

	]