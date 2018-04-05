module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {      
      files: ['Gruntfile.js','lib/*','template/*','bower_components/*','bower.json','package.json'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {      
    	files:['Gruntfile.js','lib/**/*','template/**/*','bower_components/**/*','bower.json','package.json'],
    	tasks: ['wiredep'],
    	options: {
                livereload: true,
              }
    },    
    wiredep:{
    	 task: {    		   
    		 	expand:true,
    		    src: 'index.html',    		    
    		    dependencies:true
    		  },    		  
    	}
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('default',['wiredep','watch']);

};