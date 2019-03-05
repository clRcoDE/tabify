import {createStackNavigator , createSwitchNavigator ,createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Launcher from '../pages/Launcher'
import Bookmarks from '../pages/Bookmarks'
// import Library from '../pages/Library'
// import Profile from '../pages/Profile'
// import Explore from '../pages/Explore'
import Stories from '../pages/Stories'
import Products from '../pages/Products'


import React from 'react'
import {Image} from 'react-native'

// const ProfileStack = createStackNavigator(
//     {
//         ProfileScreen:{screen:Profile}
//     }
// )


// const LibraryStack = createStackNavigator(
//     {
//         LibraryScreen:{screen:Library}
//     }
// )



// const BookmarksStack = createStackNavigator(
//     {
//         BookmarksScreen:Bookmarks
//     }
// )



/*****************************    FIRST APPOROACH => HEADER IS HIDABLE BUT BOTTOM-TAB ISN'T      *********************************** */




// const  ExploreStack= createStackNavigator(
//     {
//         // ExploreScreen:Explore,


//         Products:Products,
//         Stories:Stories
//     }
// )



// const HomeStack = createBottomTabNavigator(
//     {
        
//         Bookmarks: Bookmarks,
//         Explore: ExploreStack,



//         // Profile: ProfileStack,
//         // Library: LibraryStack,

//     },
//     {
//         initialRouteName:'Explore'
//     }
// )



//***************************************      SECOND APPOROACH =>       ******************************************** */









const ExploreStack = createStackNavigator(
    {
        Products:Products
    },{
        headerMode:'none',
        
    
    
    }
)



const TabStack = createBottomTabNavigator(
    {
        Explore:{
            screen:ExploreStack,
            navigationOptions: ({ navigation }) => ({
                title: `s Profile'`,
                tabBarIcon:({tintColor})=><Image source={require('../assets/images/star.png')} style={{tintColor:tintColor,width:25,height:25}}/>
              })
        },
        Bookmarks:Bookmarks
    },{
        
                tabBarOptions:{
                    showLabel:false,
                    // activeBackgroundColor:'red',
                    // inactiveBackgroundColor:'green',
                    style:{
                        backgroundColor:'royalblue'
                    }
        
        
       
        }
    }
)


const HomeStack = createStackNavigator(
    {
        Tabs:TabStack,
        Stories:Stories,
        
      
    },{
        headerMode:'none',
    }
)



/***************************************   APP-CONTAINER & APP-NAVIGATOR  ******************************************* */


const AppNavigator = createSwitchNavigator(
    {
        Launcher : Launcher,
        Home: HomeStack
    }
)



const AppContainer = createAppContainer(AppNavigator)


export default AppContainer



