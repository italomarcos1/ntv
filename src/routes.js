import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';

const Routes = createAppContainer(
  createStackNavigator(
    { Main },
    {
      defaultNavigationOptions: {
        headerTitleAlign: 'right',
        headerTintColor: '#e6b32a',
        headerStyle: {
          backgroundColor: '#7159c1',
        },
      },
    }
  )
);

export default Routes;
