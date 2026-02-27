import { useEffect, useState } from 'react'
import { supabase } from './lib/supabaseClient'

function App() {
  const [connectionStatus, setConnectionStatus] = useState('Connecting...')

  useEffect(() => {
    async function checkConnection() {
      // We try to fetch something tiny from the auth system to see if it responds
      const { data, error } = await supabase.auth.getSession()
      if (error) {
        setConnectionStatus('Connection Error: ' + error.message)
      } else {
        setConnectionStatus('Connected to Supabase! 🚀')
      }
    }
    checkConnection()
  }, [])

  return (
    <div className="flex items-center justify-center h-screen bg-slate-900 text-white">
      <h1 className="text-3xl font-bold p-8 rounded-lg bg-slate-800 shadow-xl">
        {connectionStatus}
      </h1>
    </div>
  )
}

export default App