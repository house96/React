import { MOVE_ORDER_TO_FARM, CREATE_ORDER } from './marketTypes'

export const createOrder = data => {
  return {
    type: CREATE_ORDER,
    payload: data
  }
}

export const moveOrderToFarm = data => {
  return {
    type: MOVE_ORDER_TO_FARM,
    payload: data
  }
}
