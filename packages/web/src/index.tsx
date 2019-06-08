import { AppRegistry } from 'react-native'

import App from 'components/src/App'

AppRegistry.registerComponent('xintersect', () => App)
AppRegistry.runApplication('xintersect', {
  rootTag: document.getElementById('root'),
})