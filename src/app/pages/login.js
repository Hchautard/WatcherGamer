"use client";

import Switch from "../components/switch.js";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-background text-foreground">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        
        <div className="flex flex-col gap-4 items-center">
          <Switch />
          <h1 className="text-4xl font-bold">Watcher Gamer</h1>
          <p className="text-lg text-center">
            Connect your account to start accounting your games!
          </p>

          <div className="flex gap-4">
            <input
              type="text"
              className="border border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded p-2"
              placeholder="Username"
            />
            <input
              type="password"
              className="border border-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded p-2"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex flex-row items-center gap-4 justify-center w-full">
          <a 
          href={"/"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-blue-600 dark:hover:bg-blue-800">
            Connect
          </a>
          <a
            onClick={() => navigate('/register')}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded dark:bg-gray-600 dark:hover:bg-gray-800"
          >
            Register
          </a>
        </div>
      </main>
    </div>
  );
}
