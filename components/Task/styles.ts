import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  item:{
    backgroundColor: '#FFEDED',
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#9D0191',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  itemLeft:{
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square:{
    width: 24,
    height: 24,
    backgroundColor: '#9D0191',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText:{
    maxWidth: '80%',
  },
  circular:{
    width: 12,
    height: 12,
    borderColor: '#32E0C4',
    borderWidth:2,
    borderRadius: 5,

  },
})