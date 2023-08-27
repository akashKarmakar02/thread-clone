import PostThread from "@/components/forms/PostThread";
import { fetchUser } from "@/lib/actions/user.server";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function page() {
  const user = await currentUser();

  if (!user) return null;

  const userInfo = await fetchUser(user.id);

  if (!userInfo.onboarded) return redirect("/onboarding");

  return (
    <>
      <h1 className="head-text">Create Thread</h1>
      <PostThread userId={JSON.stringify(userInfo._id)} />
    </>
  );
}

export default page;
