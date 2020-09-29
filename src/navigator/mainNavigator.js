import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignUp28115937Navigator from '../features/SignUp28115937/navigator';
import BlankScreen7115874Navigator from '../features/BlankScreen7115874/navigator';
import Settings1115872Navigator from '../features/Settings1115872/navigator';
import CalendarView7115867Navigator from '../features/CalendarView7115867/navigator';
import Settings115777Navigator from '../features/Settings115777/navigator';
import Settings115760Navigator from '../features/Settings115760/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignUp28115937: { screen: SignUp28115937Navigator },
BlankScreen7115874: { screen: BlankScreen7115874Navigator },
Settings1115872: { screen: Settings1115872Navigator },
CalendarView7115867: { screen: CalendarView7115867Navigator },
Settings115777: { screen: Settings115777Navigator },
Settings115760: { screen: Settings115760Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
