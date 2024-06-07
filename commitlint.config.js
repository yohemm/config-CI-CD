export default {
    extends: ['@commitlint/config-angular'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'chore', 
                'docs',
                'feat',
                'fix',
                'refractor',
                'style',
                'test',
                'ci',
                'build',
                'perf',
                'revert'
            ]
        ]
    }
}