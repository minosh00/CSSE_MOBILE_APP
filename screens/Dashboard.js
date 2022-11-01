import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import dashboardStyles from "../styles/dashboard";

const Dashboard = ({ route, navigation }) => {
  useEffect(() => {
    console.log(route.params);
    if (!!!route.params) {
      navigation.navigate("Login");
    }
  }, []);

  return (
    <View style={dashboardStyles.container}>
      <Image
        style={{ width: "100%", height: "40%" }}
        resizeMode="contain"
        source={require("../assets/Images/DashboardBackground.png")}
      />
      {route.params.userRole.toLocaleLowerCase().trim() === "sitemanager" && (
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
        </>
      )}

      {route.params.userRole.toLocaleLowerCase().trim() === "supplier" && (
        <>
          {/* Supplier */}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Quotes", {
                userID: route.params.userID,
                userRole: route.params.userRole,
              })
            }
            style={dashboardStyles.card}
          >
            <Text style={{ color: "white" }}>Quotations</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AddItem", {
                userID: route.params.userID,
                userRole: route.params.userRole,
              })
            }
            style={dashboardStyles.card}
          >
            <Text style={{ color: "white" }}>Add Items</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AllInvoices", {
                userID: route.params.userID,
                userRole: route.params.userRole,
              })
            }
            style={dashboardStyles.card}
          >
            <Text style={{ color: "white" }}>Invoices</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>
              navigation.navigate("ViewPayment", {
                userID: route.params.userID,
                userRole: route.params.userRole,
              })
            } style={dashboardStyles.card}>
            <Text style={{ color: "white" }}>Payment</Text>
          </TouchableOpacity>
        </>
      )}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Delivery", {
            userID: route.params.userID,
            userRole: route.params.userRole,
          })
        }
        style={dashboardStyles.card}
      >
        <Text style={{ color: "white" }}>Delivery</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
