module.exports = (React, ReactNative, { styles }) => {
  const { TouchableWithoutFeedback, View } = ReactNative;
  const createReactClass = require('create-react-class')

  const MenuOptions = createReactClass({
    displayName: 'MenuOptions',
    onSelect(value) {
      this.props.onSelect(value);
    },
    render() {
      return (
        <TouchableWithoutFeedback style={[styles.options, this.props.style]}>
          <View>
            { React.Children.map(this.props.children, (x) => (
              React.cloneElement(x, {onPress: this.onSelect})
            )) }
          </View>
        </TouchableWithoutFeedback>
      );
    }
  });

  return MenuOptions;
};
