# windowsIIS的配置

windowsIIS的是windows自带的服务器程序，我们只需要用它提供的文件下载服务，就能在局域网环境中实现squirrel的自动更新。

打开*windows 功能*

安装*Internet Information Service*（可全部使用默认配置）

打开*Internet Information Service管理器*

打开*MIME 类型*

添加  
文件扩展名=".nupkg" mime类型="application/zip"  
文件扩展名="." mime类型="text/plain" 

即可使应用从windowsIIS服务器下载更新的包