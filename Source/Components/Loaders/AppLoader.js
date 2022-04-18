import React from "react";
import { View, Modal, Text } from "react-native";
import { useSelector } from "react-redux";

const AppLoader = () => {
  const { visible } = useSelector(store => store.loader);

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={{ flex: 1 }}>
        <Text>Loader</Text>
      </View>
    </Modal>
  );
};

export default AppLoader;
