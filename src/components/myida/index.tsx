import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, Modal, Portal, Text, Button, Provider} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

const MyIdaView = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <View style={styles.container}>
      <Title>my ida coming soon</Title>
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}>
            <Text>Example Modal. Click outside this area to dismiss.</Text>
          </Modal>
        </Portal>
        <Button onPress={showModal}>LOGIN</Button>
      </Provider>
    </View>
  );
};

export default MyIdaView;
