var electronInstaller = require('electron-winstaller');
var fs = require('fs');

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: 'E:\\Learning\\Internship\\update\\updateTest3\\resources\\app\\myelectron\\myelectron-win32-x64',
    outputDirectory: 'E:\\Learning\\Internship\\update\\updateTest3\\installed',
    authors: 'Johnkyon.',
    exe: 'myelectron.exe'
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));