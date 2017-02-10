module.exports = function(grunt){
  grunt.config.init({
      pkg: grunt.file.readJSON("package.json"),
      'create-windows-installer': {
    x64: {
      appDirectory: 'E:\\Learning\\Internship\\update\\updateTest3\\resources\\app\\myelectron\\myelectron-win32-x64',
      outputDirectory: 'E:\\Learning\\Internship\\update\\updateTest3\\installed',
      authors: 'My App Inc.',
      exe: 'myelectron.exe'
    },
    ia32: {
      appDirectory: 'E:\\Learning\\Internship\\update\\updateTest3\\resources\\app\\myelectron\\myelectron-win32-x64',
      outputDirectory: 'E:\\Learning\\Internship\\update\\updateTest3\\installed',
      authors: 'My App Inc.',
      exe: 'myelectron.exe'
    }
  }
  })

  grunt.loadNpmTasks('grunt-electron-installer');
};