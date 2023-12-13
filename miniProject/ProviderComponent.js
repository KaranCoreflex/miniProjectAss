import React from 'react'
import { Provider } from 'react-redux';
import HostComponent from './MainComponent';
import { store } from '../sagasapp/store';

const ProviderComponent = () => {
  return (
    <Provider store={store}>
      <HostComponent/>
    </Provider>
  )
}

export default ProviderComponent