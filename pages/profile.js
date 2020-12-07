import { useSession } from "next-auth/client";

const ProfilePage = () => {
  const [session, loading] = useSession();
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {session?.user?.name}</p>
      <p>Email: {session?.user?.email}</p>
    </div>
  );
};

export default ProfilePage;
