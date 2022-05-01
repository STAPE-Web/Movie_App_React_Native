import AppLoading from 'expo-app-loading';
import { useFonts, McLaren_400Regular } from '@expo-google-fonts/mclaren';
import Navigator from './Navigate';


export default function App() {
  let [fontsLoaded] = useFonts({
    McLaren_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Navigator />
    );
  }
};