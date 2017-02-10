# electron自动更新

## 安装grunt-electron-installer

默认已经安装npm。
输入如下命令安装grunt-electron-installer

    npm install --save-dev grunt-electron-installer

但是在windows10 操作环境下需要将grunt 指令添加进system path，这里使用[grunt 官方文档](http://gruntjs.com/getting-started)推荐的方法

    npm install -g grunt-cli

## 配置grunt任务
配置grunt 任务，需要创建名为Gruntfile.js 的文件，配置如下

    module.exports = function(grunt){
    grunt.config.init({
        pkg: grunt.file.readJSON("package.json"),
        'create-windows-installer': {
        x64: {
        appDirectory: 'MYPATH1',
        outputDirectory: 'MYPATH2',
        authors: 'My App Inc.',
        exe: 'myelectron.exe'
        },
        ia32: {
        appDirectory: 'MYPATH1',
        outputDirectory: 'MYPATH2',
        authors: 'My App Inc.',
        exe: 'myelectron.exe'
        }
    }
    })

    grunt.loadNpmTasks('grunt-electron-installer');
    };

appDirectory: 要发布的程序的路径。
outputDirectory: 打包后发布的包储存的路径。
其中exe 对应的值是打包后的electron 程序的名字，推荐使用[electron-packager](https://github.com/electron-userland/electron-packager) 进行打包（反正我是用的这个啦）。

## 程序配置
electron的自动更新实际上是依靠squirrel 框架来实现的，对此，electron 提供了一个api [AutoUpdater](http://electron.atom.io/docs/api/auto-updater/) 来实现对squirrel 事件的处理。

对squirrel事件的处理越靠前越好，官方推荐在程序的入口处理squirrel的事件，因此我们在main.js 的最开始就对squirrel事件进行处理。

    var autoUpdater = require('electron').autoUpdater;
    autoUpdater.setFeedURL('MYPATH2');

    autoUpdater.checkForUpdates();

    autoUpdater.on('update-downloaded', () => {
        autoUpdater.quitAndInstall();
    ）

setFeedURL 就是你发布包的位置，autoUpdater会从这里获取RELEASE 信息和发布的nupkg 包。

## 发布
在Gruntfile.js 文件的根目录下执行

    grunt create-windows-installer
发布包，包含nupkg包和RELEASE文件信息。  
之后在程序启动的时候会在setFeedURL设定的URL处寻找更新。

## 问题
目前遇到的问题是，在执行安装的时候，squirrel会和autoUpdater冲突,因为squirrel会执行安装程序，所以官方的[推荐做法](https://github.com/electron/windows-installer#handling-squirrel-events)是在第一次安装的时候不寻找更新。
