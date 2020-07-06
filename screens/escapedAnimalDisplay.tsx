import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../Redux/rootReducer';
import { zooAnimal } from '../models/zooAnimal';
import { setAlarm, setEscapedAnimal } from '../Redux/features/zooSlice'
import { Text, View, Button, StyleSheet } from 'react-native';

export interface EscapedAnimalDisplayProps {
  //TODO add actions and properties that you want to use here.  This matches the definition in your slice
  //e.g setFirstName: (item: string) => {},  //TODO Add these actions to mapDispathToProps
  //firstName: string,  //TODO Add these properties to mapStateToProps
  zooAnimals: Array<zooAnimal>,
  animalHasEscaped: boolean,
  setAlarm: (item: boolean) => {},
  setEscapedAnimal: (item: zooAnimal)=>{},
  alarmRaised: boolean
}

export interface escapedAnimalDisplayState {
}

const mapDispatchToProps = {
  //TODO Add the action calls you want to use in this component.  
  //Remember to import them from the slice e.g. import { setFirstName } from '../Redux/features/employee/employeeSlice'; 
  setAlarm,
  setEscapedAnimal
}

const mapStateToProps = (state: RootState) => {
  return {
    //TODO map state properties here e.g. firstName : state.employeeManager.firstName
    zooAnimals: state.zooMonitor.zooAnimals,
    escapedAnimal: state.zooMonitor.escapedAnimal,
    animalHasEscaped: state.zooMonitor.animalHasEscaped,
    alarmRaised: state.zooMonitor.animalHasEscaped
  };
};

class escapedAnimalDisplayComponent extends React.Component<EscapedAnimalDisplayProps, escapedAnimalDisplayState> {
  constructor(props: EscapedAnimalDisplayProps) {
    super(props);
    this.state = {
    };
  }
  raiseTheAlarm(escapedAnimalDetails : zooAnimal){
    this.props.setAlarm(true);
    this.props.setEscapedAnimal(escapedAnimalDetails);
  }

  public render() {
    if (!this.props.alarmRaised) {
    return (
      <View>
        {this.props.zooAnimals.map((animal, i) => (
          <View key={i + 'view'} style={styles.animal}>
            <Text key={i + 'name'}>Animal Name: {animal.animalName}</Text>
            <Text key={i+'type'}>Type of Animal: {animal.animalType}</Text>
            <Text style={{paddingBottom:10}} key={i+'danger'}>Danger Level: {animal.dangerLevel}</Text>
            <Button key={i+'escape'} title="Animal Escaped!" onPress={() => { this.raiseTheAlarm(animal) }}></Button>
          </View>
        ))}
      </View>
    );
    } else {
      return (<View></View>)
    }
  }
}

const styles = StyleSheet.create({
  animal: {
    padding: 10,
    borderRadius:10,
    paddingBottom:15,
    marginBottom:10,
    flexDirection: 'column',
    backgroundColor: 'lightgray',
    alignItems: 'flex-start',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(escapedAnimalDisplayComponent);