import {createStackNavigator , createSwitchNavigator ,createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Launcher from '../pages/Launcher'
import Bookmarks from '../pages/Bookmarks'
import Library from '../pages/Library'
import Profile from '../pages/Profile'
import Explore from '../pages/Explore'






const ProfileStack = createStackNavigator(
    {
        Profile:{screen:Profile}
    }
)


const LibraryStack = createStackNavigator(
    {
        Library:{screen:Library}
    }
)

const BookmarksStack = createStackNavigator(
    {
        Bookmarks:{screen:Bookmarks}
    }
)


const  ExploreStack= createStackNavigator(
    {
        Explore:{screen:Explore}
    }
)


const AppNavigator = createSwitchNavigator(
    {
        Launcher : {screen: Launcher},
        HomeStack:{screen : HomeStack}
    }
)

const HomeStack = createBottomTabNavigator(
    {
        ProfileStack:{screen : ProfileStack},
        LibraryStack :{screen : LibraryStack},
        BookmarksStack:{screen : BookmarksStack},
        ExploreStack:{screen : ExploreStack}
    },{
        initialRouteName:'ExploreStack'
    }
)

export default  AppContainer = createAppContainer({AppNavigator})



