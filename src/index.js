import React, { useEffect, useCallback, useState } from "react";
import { Provider } from "react-redux";
import configureStore from "./store";
import RootNavigator from "./navigation";
import { View } from "react-native";
import { loadAsync } from "expo-font";
import { preventAutoHideAsync, hideAsync } from "expo-splash-screen";
import Entypo from "@expo/vector-icons/Entypo";

const initialData = {};
const store = configureStore(initialData);
preventAutoHideAsync();

export default () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await loadAsync(Entypo.font);
        // await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <View
        style={{ flex: 1 }}
        onLayout={onLayoutRootView}
      >
        <RootNavigator />
      </View>
    </Provider>
  );
};
