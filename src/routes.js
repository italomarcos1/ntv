import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator(
    { Main, User },
    {
      defaultNavigationOptions: {
        headerTitleAlign: 'right',
        headerTintColor: '#e6b32a',
        headerStyle: {
          backgroundColor: '#452c20',
        },
      },
    }
  )
);

export default Routes;
