import Switch from "../components/switch";
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const registerUser = async (username, password) => {
    try {
      const response = await fetch('https://localhost:3001/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const user = await response.json();
        console.log("User created:", user);
        // navigate('/login');
      } else {
        throw new Error(`Error creating user: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const username = e.target.username.value;
      const response = await fetch(`https://localhost:3001/user/username/${username}`);

      if (!response.ok) {
          if (response.status === 404) {
            
            const password = e.target.password.value;
            await registerUser(username, password);

          } else {
              throw new Error(`Error fetching user: ${response.statusText}`);
          }
      } else {
          const existingUser = await response.json();
          console.log("User already exists:", existingUser);
          alert("This username is already taken. Please choose another one.");
          return;
      }

    } catch (error) {
        console.error("Error during user check:", error);
        alert("An error occurred while checking the username. Please try again.");
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-background text-foreground">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        {/* Connection page */}
        <div className="flex flex-col gap-4 items-center">
          <Switch />
          <h1 className="text-4xl font-bold">Watcher Gamer</h1>
          <p className="text-lg text-center">
            Create an account to start accounting your games!
          </p>

          <div className="flex gap-4">
            <form onSubmit={handleSubmit} id="register-form">
              <input
                type="text"
                className="border border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded p-2"
                placeholder="Username"
                name="username"
              />
              <input
                type="password"
                className="border border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded p-2"
                placeholder="Password"
                name="password"
              />
            </form>
          </div>
        </div>

        <div className="flex flex-row items-center gap-4 justify-center w-full">
          <button 
            type="submit"
            form="register-form"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-blue-600 dark:hover:bg-blue-800">
            Register
          </button>
          <a 
            onClick={() => navigate('/login')}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded dark:bg-gray-600 dark:hover:bg-gray-800">
            Login
          </a>
        </div>
      </main>
    </div>
  );
}
