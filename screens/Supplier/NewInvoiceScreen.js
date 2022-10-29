import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import commonStyles from "../../styles/common";

const NewInvoiceScreen = () => {
  const [orderID, setOrderID] = useState("");
  const [itemName, setItemName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <ScrollView style={{ width: "80%", margin: 2 }}>
        <TextInput
          value={orderID}
          onChange={(e) => setOrderID(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Order ID"
        />
        <TextInput
          value={itemName}
          onChange={(e) => setItemName(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Item Name"
        />
        <TextInput
          keyboardType="number-pad"
          value={qty}
          onChange={(e) => setQty(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Quantity"
        />
        <TextInput
          value={price}
          keyboardType="decimal-pad"
          onChange={(e) => setPrice(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Price"
        />
        <TouchableOpacity
          onPress={() => createOrder()}
          style={commonStyles.button}
        >
          <Text style={{ color: "white" }}>Create Order</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default NewInvoiceScreen;
