import Switch from "../components/switch";
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
    // Fetch is an user is already registered
    fetch(`http://localhost:3001/user/username/${e.target.username.value}`)
      .then((res) => res.json())
      .then((user) => {
        if (user) {
          alert("User already registered");
        } else {
          fetch("http://localhost:3001/user/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: e.target.username.value,
              password: e.target.password.value,
            }),
          })
            .then((res) => res.json())
            .then((user) => {
              navigate("/");
            });
        }
      });
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
            onClick={() => navigate('/')}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded dark:bg-gray-600 dark:hover:bg-gray-800">
            Login
          </a>
        </div>
      </main>
    </div>
  );
}
