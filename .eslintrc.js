module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': 1
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'quotes': [2, 'single', {'avoidEscape': true}],

		'linebreak-style': [
			'error',
			'unix'
		],
		'semi': [
			'error',
			'never'
		],
		'no-multiple-empty-lines': [
			'error',
			{
				'max': 1,
				'maxEOF': 0
			}],
		'padded-blocks': ['error', 'never'],
	}
}
