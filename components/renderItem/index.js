import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { style } from "./styles";

const RenderItem = ({item,onPress}) => {
    return (
        <View style={style.itemContainer}>
        <Text>{item.id}</Text>
        <Text style={style.item}>{item.value}</Text>
        <TouchableOpacity
          style={style.button}
          onPress={onPress}
        >
          <Text style={style.delete}>X</Text>
        </TouchableOpacity>
      </View>
    )
}

export default RenderItem;