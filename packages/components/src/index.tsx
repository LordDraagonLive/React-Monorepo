import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
// import { CounterStoreContext } from "./stores/CounterStore";
import { View, Text, StyleSheet } from "react-native";
import { Router } from "./Router";

export const Index = observer(()=> {

    return (
        <View>
             <View style={styles.wrapper}>
                <Router/>
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    wrapper:{
        width:'100%',
        maxWidth: 425,
        backgroundColor: 'red',

      }
});

