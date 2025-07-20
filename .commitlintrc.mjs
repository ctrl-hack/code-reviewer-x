export default {
    parserPreset: {
        parserOpts: {
            headerPattern: /^\[(fix|feat|feature|test|refactor)]\[([A-Za-z0-9_-]+)] - (.+)$/,
            headerCorrespondence: ['issue', 'title'],
        },
    },
    plugins: [
        {
            rules: {
                'title-pattern': ({ issue, title }) =>
                    issue === null || title === null
                        ? [
                            false,
                            'Commit message pattern should be in the form of' +
                            ' [fix|feat|feature|test|refactor][JIRA ID] -' +
                            ' message \n for' +
                            ' example: [fix][CHA-876] - Fixed login cases ',
                        ]
                        : [true, ''],
            },
        },
    ],
    rules: {
        'title-pattern': [2, 'always'],
    },
}