module.exports = {
  options: {
    nospawn: yes
  },

  test: {
    files: ['src/**/*.js', 'test/**/*.js'],
    tasks: ['build']
  }
};
