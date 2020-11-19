module.exports = {
    moduleFileExtensions: ['tsx', 'js', 'json', 'jsx', 'ts', 'node'],
    moduleDirectories: ['node_modules', 'src'],
    modulePathIgnorePatterns: ['cypress'],
    moduleNameMapper: {
        '^.+\\.(css|scss)$': 'identity-obj-proxy'
    },
    setupFiles: ['core-js'],
    setupFilesAfterEnv: [
        '<rootDir>/src/tests/tests-setup.ts'
    ]
};