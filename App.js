import React from 'react'
import { StatusBar, View, Platform } from 'react-native'
import Constants from 'expo'
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { darkBlue, white } from './utils/colors'
import { setLocalNotification } from './utils/helpers'
import reducer from './reducers'
import AddDeck from './components/AddDeck'
import DeckList from './components/DeckList'
import DeckDisplay from './components/DeckDisplay'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'

function MobileStatusBar ({backgroundColor, ...props}) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
        </View>
    )
}

const AppleTabs = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck List',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-folder-open' size={28} color={tintColor} />
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-document' size={28} color={tintColor} />
    },
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? darkBlue : white,
    style: {
      height: 50,
      backgroundColor: Platform.OS === 'ios' ? white : darkBlue,
      shadowColor: 'rgba(0, 0, 0, 0.30)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const AndroidTabs = createMaterialTopTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck List',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-folder-open' size={28} color={tintColor} />
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-document' size={28} color={tintColor} />
    },
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: white,
    style: {
      height: 50,
      backgroundColor: darkBlue,
      shadowColor: 'rgba(0, 0, 0, 0.30)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const Tabs = Platform.OS === 'ios' ? AppleTabs : AndroidTabs

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckDisplay: {
    screen: DeckDisplay,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: darkBlue
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: darkBlue
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: darkBlue
      }
    }
  }
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex:1}}>
        <MobileStatusBar backgroundColor={darkBlue} barStyle="light-content"/>
        <MainNavigator />
      </View>
      </Provider>
    )
  }
}