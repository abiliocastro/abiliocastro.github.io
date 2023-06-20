var term;

var initial = [
	'%+r                    Abilio Castro e Silva                    %-r',
	' ',
	'* Junior Java Backend Developer at Decartes System Group,',
	'* Bachelor in Software Engineering by Federal University of Ceará',
	' ',
	'Available options:',
	'exp: complete Abilio\'s experience',
  'net: social network links',
	'cle: clear all outputs / resets terminal',
	' '
];

var experience = [
	'-----------------------  Experience  -----------------------',
	' ',
	'* Junior Java Backend Developer | Apr 2020 - Current',
	'  Company: Decartes System Group',
	' ',
  '* Java Backend Intern           | Aug 2019 - Nov 2019',
	'  Company: OSF Global Services',
	' ',
  '* Entrepeneur                   | Jan 2016 - Current',
	'  Company: Calango Digital',
	' '
];

function termOpen() {
  const colNum = Math.floor(document.getElementsByTagName('html')[0].clientWidth / 13.25)
  const rowNum = Math.floor(window.innerHeight / 24)

	if ((!term) || (term.closed)) {
		term = new Terminal(
			{
				x: 0,
				y: 0,
				termDiv: 'termDiv',
				bgColor: '#000000',
        cols: colNum,
        rows: rowNum,
        crsrBlinkMode: true,
				greeting: initial.join('\n'),
				handler: termHandler,
				exitHandler: termExitHandler
			}
		);
		term.open();
	}
}

function termExitHandler() {
	// reset the UI
	var mainPane = (document.getElementById)?
		document.getElementById('mainPane') : document.all.mainPane;
	if (mainPane) mainPane.className = 'lh15';
}

function termHandler() {
	this.newLine();
	
	this.lineBuffer = this.lineBuffer.replace(/^\s+/, '');
	var argv = this.lineBuffer.split(/\s+/);
	var cmd = argv[0];
	
	switch (cmd) {
		case 'exp':
			this.write(experience);
			break;
    
    case 'clear':
      this.clear();
      this.write(initial);
      this.prompt();
      return;

		case 'exit':
			this.close();
			return;

		default:
			if (this.lineBuffer != '') {
				this.type('Unknow option. Please type net for Abilio\'s social networks links');
				this.newLine();
			}
	}
	this.prompt();
}

termOpen();