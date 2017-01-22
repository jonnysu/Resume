module.exports = function (grunt) {
 
    grunt.initConfig({
        less: {
            // 编译
            compile: {
                files: {
                    'dist/site.css': 'src/site.less'
                }
            },
            // 压缩
            yuicompress: {
                files: {
                    'dist/site-min.css': 'dist/site.css'
                },
                options: {
                    //yuicompress: true,
                    compress:true
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/*.less'],
                tasks: ['less']
            }
        }
    });
 
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
    grunt.registerTask('default', ['less', 'watch']);
 
};