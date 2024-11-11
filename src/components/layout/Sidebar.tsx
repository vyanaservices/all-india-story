import Link from "next/link";
import Logo from "../elements/Logo";
export default function Sidebar({ isSidebar, handleSidebar }: any) {
  return (
    <>
      <div
        className={`fixed -right-80 top-0 z-[99999] h-full w-80 overflow-y-scroll bg-black transition-all duration-300 ${isSidebar ? "right-0" : ""}`}
      >
        <div
          className="align-center mx-auto my-0 flex cursor-pointer justify-center rounded-md p-1 text-white"
          onClick={handleSidebar}
        >
          ppppp
        </div>
        <div className="grid px-4 py-10">
          <Logo />
          <p className="mb-10">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam,
            exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse
            quam nihil
          </p>
        </div>
      </div>
    </>
  );
}
