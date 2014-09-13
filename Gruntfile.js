/* global module:true */
/* global require:true */
module.exports = function (grunt) {

    grunt.initConfig({

      clean: {
          output: {
              src:  "output/"
          },
      },

      zip: {
	extension: {
          src: ['*', '!node_modules', '!output'],
          dest: 'output/extension.zip'
        }
      }

    });

    grunt.loadNpmTasks('grunt-zip');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('package', [
        'zip:extension'
    ]);

    grunt.registerTask('default', [
        'clean',
        'package'
    ]);

};
