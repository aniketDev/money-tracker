import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import RootNavigator from './navigation';
import { useFonts } from 'expo-font';
import { useAssets } from 'expo-asset';
import { AppLoading } from 'expo';

const initialData = {};
const store = configureStore(initialData);

let customFonts = {
  'open-sans': require('../assets/fonts/OpenSans/OpenSans-Regular.ttf'),
  'open-sans-bold': require('../assets/fonts/OpenSans/OpenSans-Bold.ttf'),
  'open-sans-light': require('../assets/fonts/OpenSans/OpenSans-Light.ttf'),
  'open-sans-semibold': require('../assets/fonts/OpenSans/OpenSans-SemiBold.ttf')
};
let assets = [];

export default () => {
  let [fontsLoaded, fontLoadingError] = useFonts(customFonts);
  let [assetsLoaded, assetsLoadingError] = useAssets(assets);
  if (!fontsLoaded || !assetsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};
