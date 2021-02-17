module.exports =  {
    preset : 'ts-jest',
    transform: {
        "node_modules/variables/^.+\\.jsx?$": "ts-jest"
    },
    transformIgnorePatterns : [
        "node_modules/(?!variables/.*)"
    ],
    testEnvironment: 'node'
}