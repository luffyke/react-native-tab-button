## react-native-tab-button

### Installation
```
npm install react-native-tab-button --save
```

### Usage
``` js
import TabButton from 'react-native-tab-button';

class AwesomeProject extends Component {
  render() {
    return (
        <View>
            <TabButton leftLabel="Update Version" onPress={this._doUpgrade} rightLabel="1.0" />
            <TabButton leftLabel="About us" />
        </View>
    );
  }
  _doUpgrade() {
      console.log("do upgrade");
  }
}
```

### Example
![tab button](./example.png)
