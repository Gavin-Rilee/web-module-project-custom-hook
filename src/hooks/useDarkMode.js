import {useLocalStorage} from "./useLocalStorage";


export const useDarkMode = (initialValue) => {
const [mode, setMode] = useLocalStorage('mode', initialValue);

return [mode, setMode]
}

