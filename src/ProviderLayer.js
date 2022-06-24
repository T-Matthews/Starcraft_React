import App from "./App"
import DataProvider from './DataProvider'
import { getAuth } from 'firebase/auth';
import { useFirebaseApp, AuthProvider,DatabaseProvider } from "reactfire";
import { getDatabase } from "firebase/database";


const ProviderLayer = () => {
    const app = useFirebaseApp();
    const auth = getAuth(app);
    const db=getDatabase(app);

    return (
       <AuthProvider sdk={auth}>
        <DatabaseProvider sdk={db}>
         <DataProvider>
          <App />
         </DataProvider>
        </DatabaseProvider>
       </AuthProvider>

    )


}

export default ProviderLayer