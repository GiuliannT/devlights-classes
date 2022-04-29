import { useContext } from "react";
import { AppContext } from "../../../AppRoutes";


export const HomeButton = () => {

    const { sayHello } = useContext(AppContext);

    return (
        <button onClick={sayHello}>Hi</button>
    )
}
