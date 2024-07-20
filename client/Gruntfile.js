module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    // Define the configuration for the 'bump' task.
    bump: {
      // Define the options for the bump task.
      options: {
        // List of files to be updated with the new version.
        files: ['package.json'],
        // Configuration to update (empty array means no additional configs).
        updateConfigs: [],
        // If true, creates a commit with the version bump.
        commit: true,
        // Commit message template.
        commitMessage: 'Bump v%VERSION%',
        // List of files to commit.
        commitFiles: ['package.json'],
        // If true, creates a Git tag with the new version.
        createTag: true,
        // Tag name template.
        tagName: 'v%VERSION%',
        // Tag message template.
        tagMessage: 'Version %VERSION%',
        // If true, pushes the commit and tag to the remote repository.
        push: false,
        // Remote repository to push changes to.
        pushTo: 'origin',
        // Options for 'git describe' command.
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
        // If true, performs global replacement.
        globalReplace: false,
        // Name of prerelease (e.g., alpha, beta).
        prereleaseName: false,
        // Metadata to include in the version bump (empty string means no metadata).
        metadata: '',
        // Regular expression to match versions (default is false).
        regExp: false,
      },
    },
  })
  // Load the 'grunt-bump' plugin.
  grunt.loadNpmTasks('grunt-bump')
}
