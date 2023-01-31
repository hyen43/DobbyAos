import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Daily from './src/pages/Daily';
import Weekly from './src/pages/Weekly';
import Register from './src/pages/Register';
import Monthly from './src/pages/Monthly';
import Settings from './src/pages/Settings';
import {useState} from 'react';
import SignIn from './src/pages/SignIn';

// 말도 안되는 화면전환을 막기 위해 type선언
export interface LoggedInParamList {
  Daily: undefined; // 일간페이지
  Weekly: undefined; // 주간페이지
  Register: undefined; // 등록페이지
  Monthly: undefined; // 월간페이지
  Settings: undefined; //설정페이지
}

export interface RootStackParamList {
  SignIn: undefined; // signin에서 signup까지
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Daily"
            component={Daily}
            options={{title: '일간'}}
          />
          <Tab.Screen
            name="Weekly"
            component={Weekly}
            options={{title: '주간'}}
          />
          <Tab.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Monthly"
            component={Monthly}
            options={{title: '월간'}}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{title: '더보기'}}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{title: '로그인'}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;
