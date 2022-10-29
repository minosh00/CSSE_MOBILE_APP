import axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import commonStyles from "../styles/common";
import orderStyles from "../styles/orders";

const DeliveryScreen = ({ route, navigation }) => {
  const [deliv, setDelive] = useState([]);

  useEffect(() => {
    axios
      .get("https://backendhostings.herokuapp.com/Transport/TansportALL")
      .then((res) => {
        setDelive(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  const checkState = (state) => {
    switch (state) {
      case "delivered":
        return orderStyles.ok;
      case "notdelivered":
        return orderStyles.declined;
      default:
        return orderStyles.pending;
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ScrollView style={{ display: "flex", flexDirection: "column" }}>
        {deliv.map((order, index) => (
          <View style={orderStyles.orderCard} key={order + index}>
            <Text
              style={{ fontWeight: "600", opacity: 0.6, textAlign: "center" }}
            >
              Order Details
            </Text>
            <View style={orderStyles.items}>
              <View>
                <Text style={{ marginVertical: 2 }}>Order ID</Text>
                <Text style={{ marginVertical: 2 }}>Transport ID</Text>
                <Text style={{ marginVertical: 2 }}>Location</Text>
                <Text style={{ marginVertical: 2 }}>Vehicle Number</Text>
                <Text style={{ marginVertical: 2 }}>Status</Text>
              </View>
              <View>
                <View style={orderStyles.orderID}>
                  <Text style={{ textAlign: "center", color: "white" }}>
                    {order.OrderID}
                  </Text>
                </View>
                <Text style={{ marginVertical: 2 }}>{order.TransportID}</Text>
                <Text style={{ marginVertical: 2 }}>{order.location}</Text>
                <Text style={{ marginVertical: 2 }}>{order.VehicleNumber}</Text>
              </View>
            </View>
            <View
              style={checkState(
                order.TransportStatus.toLocaleLowerCase().trim()
              )}
            >
              <Text style={orderStyles.status}>{order.TransportStatus}</Text>
            </View>
            {route.params.userRole.toLocaleLowerCase().trim() === "sitemanager" && 
            <TouchableOpacity
              onPress={() => createInvoice()}
              style={commonStyles.button}
            >
              <Text style={{ color: "white" }}>Make Payment</Text>
            </TouchableOpacity>}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DeliveryScreen;
