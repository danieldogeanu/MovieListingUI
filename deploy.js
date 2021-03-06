const FTP = require('./FTP.js');
const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const config = {
	user: FTP.user,
	password: FTP.pass,
	host: FTP.host,
	port: FTP.port,
	localRoot: './dist',
	remoteRoot: FTP.root,
	include: ['.*', '*', 'dist/*'],
	deleteRemote: true,
	forcePasv: true,
};

ftpDeploy.deploy(config)
	.then(res => console.log('Deployed: ', res.flat()))
	.catch(err => console.error('Deploy Error: ', err));
