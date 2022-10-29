import React, { useEffect } from "react";
import { View, Text, Button, TouchableOpacity, ScrollView } from "react-native";
import dashboardStyles from "../styles/dashboard";

const Dashboard = ({ route, navigation }) => {
  useEffect(() => {
    console.log(route.params)
    if (!!!route.params) {
      navigation.navigate("Login");
    }
  }, []);

  return (
    <View style={dashboardStyles.container}>
      <ScrollView>
        {route.params.userRole.toLocaleLowerCase() === "sitemanager" && (
          <>
            {/* Site Manager */}
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("NewOrder", {
                  userID: route.params.userID,
                  userRole: route.params.userRole,
                })
              }
              style={dashboardStyles.card}
            >
              <Text style={{ color: "white" }}>New Order</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("AllOrders", {
                  userID: route.params.userID,
                  userRole: route.params.userRole,
                })
              }
              style={dashboardStyles.card}
            >
              <Text style={{ color: "white" }}>All Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={dashboardStyles.card}>
              <Text style={{ color: "white" }}>Delivery</Text>
            </TouchableOpacity>
          </>
        )}

        {route.params.userRole.toLocaleLowerCase() === "supplier" && (
          <>
            {/* Supplier */}
            <TouchableOpacity onPress={() => navigation.navigate("Quotes", {
              userID: route.params.userID,
              userRole: route.params.userRole,
            })} style={dashboardStyles.card}>
              <Text style={{ color: "white" }}>Quotations</Text>
            </TouchableOpacity>
            <TouchableOpacity style={dashboardStyles.card}>
              <Text style={{ color: "white" }}>Invoices</Text>
            </TouchableOpacity>
            <TouchableOpacity style={dashboardStyles.card}>
              <Text style={{ color: "white" }}>Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={dashboardStyles.card}>
              <Text style={{ color: "white" }}>Delivery</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default Dashboard;
