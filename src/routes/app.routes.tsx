import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Groups } from "@screens/Groups";
import { NewTeam } from "@screens/NewClass";
import { ClassGroup } from "@screens/ClassGroup";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRouter(){
    return(
    <Navigator screenOptions={{ headerShown: false }}>

        <Screen
            name="groups"
            component={Groups}
        />

        <Screen
            name="create"
            component={NewTeam}
        />

        <Screen
            name="class"
            component={ClassGroup}
        />

    </Navigator>
    )
}