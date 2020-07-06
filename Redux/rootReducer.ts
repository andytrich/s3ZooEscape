import { combineReducers } from '@reduxjs/toolkit'
//TODO import slices here e.g import employeeReducer from './features/employees/employeeSlice'
import zooReducer from './features/zooSlice'

const rootReducer = combineReducers({
//TODO add slices here e.g. employeeManager: employeeReducer, 
//this is the variable you will use to access the slice from your components e.g. state.employeeManager.employees
zooMonitor: zooReducer
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer