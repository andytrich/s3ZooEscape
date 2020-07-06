import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../Redux/rootReducer';
import { View, Text, StyleSheet, Button } from 'react-native';
import { setAlarm } from '../Redux/features/zooSlice'

export interface ZooAnimalMonitorProps {
  //TODO add actions and properties that you want to use here.  This matches the definition in your slice
  //e.g setFirstName: (item: string) => {},  //TODO Add these actions to mapDispathToProps
  //firstName: string,  //TODO Add these properties to mapStateToProps
  alarmRaised: boolean,
  setAlarm: (item: boolean)=>{}
}

export interface ZooAnimalMonitorState {
}

const mapDispatchToProps = {
  //TODO Add the action calls you want to use in this component.  
  //Remember to import them from the slice e.g. import { setFirstName } from '../Redux/features/employee/employeeSlice'; 
  setAlarm
}

const mapStateToProps = (state: RootState) => {
  return {
    //TODO map state properties here e.g. firstName : state.employeeManager.firstName
    alarmRaised: state.zooMonitor.animalHasEscaped
  };
};

class ZooAnimalMonitorComponent extends React.Component<ZooAnimalMonitorProps, ZooAnimalMonitorState> {
  constructor(props: ZooAnimalMonitorProps) {
    super(props);
    this.state = {
    };
  }

animalRecaptured(){
  this.props.setAlarm(false);
}

  public render() {
    if(this.props.alarmRaised){
      return (
        <View style={styles.alert}>
          <Text>THE ANIMALS HAVE ESCAPED</Text>
          <Text>RUN FOR YOUR LIFE!</Text>
          <Button title="Animal recaptured" onPress={() => { this.animalRecaptured() }}></Button>
        </View>
      );
    }else{
      return(<View></View>)
    }

  }
}

const styles = StyleSheet.create({
  alert: {
    padding: 10,
    flexDirection: 'column',
    backgroundColor: 'red',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 5
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ZooAnimalMonitorComponent);