## General set up

Run npm install

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

## Navigation Setup

For navigating between screens, the opensource community go to is <a href="https://reactnavigation.org/">react navigation.</a>

To set this up for native, firstly we need to install it within the project:

```
npm install @react-navigation/native @react-navigation/stack
```

Then, we install the dependencies

```
npm install @react-navigation/native @react-navigation/stack
```

Now you know how this react ditty works, lets get some imports on the go!

In our App.js (right at the top!) pop this bad boy in:

```javascript
import "react-native-gesture-handler";
```

In our App.js we will also create out navigation stack, so we have to import the following

```javascript
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
```

Then lets create our navigator and within out return statement add the navigation container

```javascript
const Stack = createStackNavigator();

const App = () => {
  return <NavigationContainer></NavigationContainer>;
};
```

Finally, we'll set up our stack within said container, with seperate .Screen for each screen with optional properties and a block with the component to execute.

```javascript
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: "Welcome" }}
    />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
</NavigationContainer>
```

- Now lets make one of those there screens!

First things first, imports - just your usual shindigs here, nothing specific to navigation, that'll all get sorted when the thing gets exported.

We do want to pass our component a navigation block as a prop, however, like so:

```javascript
function HomeScreen({ navigation }) {
  return (
  )
}

export {HomeScreen};
```

Then the content is to your hearts desire. But to put in functionality to swith between screens, we use the navigation.navigate() function (with a variety of possible parameters as you can see <a href="https://reactnavigation.org/docs/params">here</a>), like so:

```javascript
function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

export { HomeScreen };
```

And that's the basics! There are other such navigation functions as well as navigate() such as goBack() etc, but that's the setup, kids! Don't code it all at once..
