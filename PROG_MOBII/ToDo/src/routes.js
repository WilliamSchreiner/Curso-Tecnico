import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Main from "./pages/Home/Main";
import Book from "./pages/Cadastro/Book";

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      Book,
    }, {
      initialRouteName: "Main",
      backBehavior: "history"
    }
  )
);

export default Routes;