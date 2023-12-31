import { fetchUser } from "@/lib/actions/user.server";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function page() {
  const user = await currentUser();

  if (!user) return null;

  const userInfo = await fetchUser(user.id);

  if (!userInfo.onboarded) return redirect("/onboarding");

  // getActivity

  return (
    <section>
      <h1 className="head-text mb-10">Activity</h1>
    </section>
  );
}

export default page;
