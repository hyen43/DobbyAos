import React, {useState} from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {useCallback} from 'react';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;

function HomeScreen({navigation}: HomeScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <TouchableHighlight onPress={onClick}>
          <Text>Home Screen</Text>
        </TouchableHighlight>
      </View>
      <View
        style={{
          flex: 4,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'orange',
        }}>
        <Pressable onPress={onClick}>
          <Text style={{color: 'white'}}>리나테스트</Text>
        </Pressable>
      </View>
    </>
  );
}

function DetailsScreen({navigation}: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableHighlight onPress={onClick}>
        <Text>Details Screen</Text>
      </TouchableHighlight>
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
function App() {
  const [showModal, setShowModal] = useState(true);
  //RN navigation에서 safeAreaView를 넣어줌
  //stack 겹겹이 쌓임
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '집안일 등록'}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
      {showModal && (
        <Pressable onPress={() => setShowModal(false)} style={styles.modal}>
          <View style={styles.modalInner}>
            <View style={{flex: 9}}>
              <Text>Hello</Text>
            </View>
            <View style={styles.modalBtn}>
              <Pressable>
                <Text>저장</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
  },
  modalInner: {
    //웬만하면 absolute 없이 위치 조정으로 만들기
    width: Dimensions.get('window').width - 100,
    marginHorizontal: 50,
    height: 300,
    // position: 'absolute',
    backgroundColor: 'orange',
    // top: 50,
    // bottom: 50,
    // left: 50,
    // right: 50,
    borderRadius: 20,
    padding: 20,
    shadowRadius: 5,
    shadowOffset: {width: 5, height: 5},
    elevation: 15,
  },
  modalBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
  },
});

export default App;
