import axios, { CanceledError } from 'axios';
import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import Colors from '../../styles/Colors';
import orderStyles from '../../styles/orders';

const AllOrdersScreen = ({route, navigation}) => {

    const [orders, setOrders] = useState([]);

    const checkState = (state) => {
        switch (state) {
            case ("ok"):
                return orderStyles.ok
            case ("decline"):
                return orderStyles.declined
            case ("pending"):
                return orderStyles.pending
            default:
                return orderStyles.pending
        }
    }

    useEffect(() => {
        axios.get("https://backendhostings.herokuapp.com/order/AllOrderStatus").then((res) => {
            setOrders(res.data);
        }).catch((e) => {
            console.error(e);
            Alert.alert("Error", "Cannot get data!", [{text: "Ok"}], {cancelable: false});
        })
    },[])

  return (
    <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ScrollView style = {{display: 'flex', flexDirection: 'column'}}>
            {
                orders.map((order, index) => (
                    <View style = {orderStyles.orderCard} key={order + index}>
                        <Text style = {{fontWeight: '600', opacity: 0.6, textAlign: 'center'}}>Order Details</Text>
                        <View style = {orderStyles.items}>
                            <View>
                                <Text style = {{marginVertical: 2}}>Order ID</Text>
                                <Text style = {{marginVertical: 2}}>Material</Text>
                                <Text style = {{marginVertical: 2}}>Quantity</Text>
                                <Text style = {{marginVertical: 2}}>Deadline</Text>
                            </View>
                            <View>
                                <View style = {orderStyles.orderID}>
                                    <Text style = {{textAlign: 'center', color: "white"}}>{order.OrderID}</Text>
                                </View>
                                <Text style = {{marginVertical: 2}}>{order.Material}</Text>
                                <Text style = {{marginVertical: 2}}>{order.QTY}</Text>
                                <Text style = {{marginVertical: 2}}>{order.Deadline}</Text>
                            </View>
                        </View>
                        <View style = {checkState(order.status.toLocaleLowerCase())}>
                            <Text style = {orderStyles.status}>{order.status}</Text>
                        </View>
                    </View>
                ))
            }
        </ScrollView>
    </View>
  )
}

export default AllOrdersScreen