import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { zooAnimal } from '../../models/zooAnimal'

interface ZooAttibutes {
  //TODO put your properties here e.g firstName: string;
  zooAnimals: Array<zooAnimal>;
  escapedAnimal: zooAnimal;
  animalHasEscaped: boolean;
};

type ZooState = {} & ZooAttibutes
let initialState: ZooState = {
  //TODO add inital property values here e.g firstName : 
  zooAnimals: [{ animalName: 'sid', animalType: 'snake', dangerLevel: 1 } as zooAnimal, { animalName: 'tony', animalType: 'tiger', dangerLevel: 5 } as zooAnimal],
  escapedAnimal: {} as zooAnimal,
  animalHasEscaped: false
}
const ZooSlice = createSlice({
  name: 'Zoo',
  initialState,
  reducers: {
    //TODO put reducer actions here e.g setFirstName(state, action: PayloadAction<string>){}
    //always update the whole property, never amend the stored value
    setAlarm(state, action: PayloadAction<boolean>) {
      state.animalHasEscaped = action.payload;
    },
    setEscapedAnimal(state, action:PayloadAction<zooAnimal>)
    {
      state.escapedAnimal = action.payload
      state.animalHasEscaped = true;
    }
  }
})

export const {
  //TODO put reducer function name here e.g. setFirstName
  setAlarm,
  setEscapedAnimal
} = ZooSlice.actions

export default ZooSlice.reducer

//TODO add side effects here as an AppThunk
//e.g. export const getMyAppointments = (): AppThunk => async (dispatch, getstate) => {
//const appointments = await BookingService.GetMyAppointments(getstate().customer);
//dispatch(setMyAppointments(appointments)); 
//}