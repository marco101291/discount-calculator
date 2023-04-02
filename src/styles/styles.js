import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 100
  },
  background: {
    height: '100%',
  },
  header: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold'
  },
  amount_container : {
    marginHorizontal: 40, 
    marginTop: 40,
    marginBottom: 20
  },
  form_title : {
    marginBottom: 10,
    color: 'white',
    fontWeight: 600
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 20, borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 20,
    textAlign: 'center'
  },
  btn: {
    fontFamily: 'Helvetica',
    width: 80,
    height: 40,
    borderRadius: 10,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center'

  },

  result: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    marginTop: 40
  },
  result_null: {
    color: 'red',
    textAlign: 'center',
    fontSize: 22,
    marginTop: 40
  }

  // avatar_container: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flex: 0.4,
  //   borderBottomWidth: 1,
  //   borderBottomColor: 'black',
  // },
  // details_container: {
  //   backgroundColor: 'white',
  //   flex: 0.6
  // },
  // item: {
  //   borderBottomWidth: 1,
  //   borderBottomColor: 'black',
  //   flex: 0.25,
  //   flexDirection: 'row',
  //   paddingHorizontal: 20,
  //   alignItems: 'center'

  // },
  // label: {
  //   flex: 0.9,
  //   color: 'orange',
  //   fontSize: 32
  // },
  // data: {
  //   fontSize: 32
  // }
});

