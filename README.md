## Testing set up

```
yarn add --dev jest jest-expo jest-fetch-mock @testing-library/react-native react-test-renderer

npm install --save-dev @testing-library/jest-native
```

Go to the package.json file

add to the end of the list

"jest": {
"preset": "jest-expo",
"transformIgnorePatterns": [
"node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base)"
],
"automock": false

add to "scripts"

"test": "jest"
