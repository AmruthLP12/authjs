import { auth } from "@/auth"

const Secret = async () => {
    const session = await auth()
    if (!session) {
      return <div>Not authenticated</div>
    }
  return (
    <div className="text-2xl text-green-700">Welcome to Secret</div>
  )
}

export default Secret