import { useContext } from "react";
import { DashboardContext } from "../../App";

export const DashboardHeaderButton = () => {
    const { onLogout } = useContext(DashboardContext);

    return (
        <button onClick={onLogout}>Logout</button>
    )
}

/*
App 
    >
    Dashboard 
        > 
        DashboardHeader 
            > 
            DashBoardHeaderButton
*/