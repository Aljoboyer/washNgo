import { StyleSheet } from "react-native";

export const Commonstyles = StyleSheet.create({
    FlexCenter:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    FlexBewteen:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    FlexStart:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:"flex-start",
        alignItems: 'center'
    },
    FlexColumnCenter:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    FlexColumnStart:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    FlexColumnEnd:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
  });