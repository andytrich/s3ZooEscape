import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { zooAnimal } from '../../models/zooAnimal'

interface ZooAttibutes {
  //TODO put your properties here e.g firstName: string;
  zooAminals: Array<zooAnimal>;
  escapedAnimal: zooAnimal;
  animalEscaped: boolean;
};

type ZooState = {} & ZooAttibutes
let initialState: ZooState = {
  //TODO add inital property values here e.g firstName : 
  zooAminals: [new zooAnimal({ animalName: 'sid', animalType: 'snake', dangerLevel: 1 }), new zooAnimal({ animalName: 'tony', animalType: 'tiger', dangerLevel: 5 })],
  escapedAnimal: {} as zooAnimal,
  animalEscaped: false
}
const ZooSlice = createSlice({
  name: 'Zoo',
  initialState,
  reducers: {
    //TODO put reducer actions here e.g setFirstName(state, action: PayloadAction<string>){}
    //always update the whole property, never amend the stored value
    raiseAlarm(state, action: PayloadAction<boolean>) {
      state.animalEscaped = action.payload;
    }
  }
})

export const {
  //TODO put reducer function name here e.g. setFirstName
  raiseAlarm
} = ZooSlice.actions

export default ZooSlice.reducer

//TODO add side effects here as an AppThunk
//e.g. export const getMyAppointments = (): AppThunk => async (dispatch, getstate) => {
//const appointments = await BookingService.GetMyAppointments(getstate().customer);
//dispatch(setMyAppointments(appointments)); 
//}