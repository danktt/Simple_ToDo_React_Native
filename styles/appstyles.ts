import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFDD',
    
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize:25,
    fontWeight: 'bold',
  },
  items:{
    marginTop: 30,
  },

  writeTaskWrapper:{
    position: 'absolute',
    bottom: 10,
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  input:{
    paddingVertical: 15,
    paddingHorizontal:15,
    backgroundColor: '#FFEDED',
    width: 250,
    borderRadius: 60,
    borderColor: '#32E0C4',
    borderWidth: 2,
  },

  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#FFEDED',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#32E0C4',
    borderWidth: 2,
  },

  addText:{},

});
