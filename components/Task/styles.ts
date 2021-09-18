import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  item:{
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#2D46B9',
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
    backgroundColor: '#6F69AC',
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
    borderColor: '#95DAC1',
    borderWidth:2,
    borderRadius: 5,

  },
})