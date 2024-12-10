import Home from "../pages/Home";
import AddRecipe from "../pages/AddRecipe";
import RecipeDetails from "../pages/RecipeDetails";
import Favorites from "../pages/Favorites";
import RegisterUser from "../pages/RegisterUser";
import UserList from "../pages/UserList";

interface Route {
  path: string
  component: React.FC
}

const routes: Route[] = [
  { path: '/', component: Home },
  { path: '/add-recipe', component: AddRecipe },
  { path: '/recipe/:id', component: RecipeDetails },
  { path: '/favorites', component: Favorites },
  { path: '/register-user', component: RegisterUser },
  { path: '/users', component: UserList },
]

export default routes
