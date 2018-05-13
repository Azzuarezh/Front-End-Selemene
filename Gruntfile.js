module.exports = function(grunt) {
  grunt.initConfig({    
    wiredep:{
       task: {           
          expand:true,
            src: ['index.html'],            
            dependencies:true
          },          
    },
    watch: {      
      files:['Gruntfile.js','index.html','lib/**/*','template/**/*','bower_components/**/*','bower.json','package.json','server.js'],
      tasks: ['wiredep'],
      options: {
                livereload: true,
              }
    },    
    run: {    
      target: {      
        args: ['server.js']
      }
    },
     open: {
      chrome: {
        path: 'http://localhost:8000',
        app: 'Google Chrome'
      },
      mozilla: {
        path: 'http://localhost:8000',
        app: 'Firefox'
      } 
    },
    concurrent: {
      target: {
        tasks: [['run:target'],'wiredep','watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    }      
       
  });
  
  grunt.loadNpmTasks('grunt-contrib-watch');  
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.registerTask('default',['concurrent:target']);

};