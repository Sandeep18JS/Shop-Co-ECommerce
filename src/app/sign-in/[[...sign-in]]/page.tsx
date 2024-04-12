import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center lg:mt-10 mt-32">
      <SignIn />
    </div>
  );
}
