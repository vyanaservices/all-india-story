import { VscVerifiedFilled } from "react-icons/vsc";
import Button from "./Button";

export default function VerifyButton({
  isVerified,
  href,
  disabledValidation,
}: any) {
  return (
    <div>
      {isVerified ? (
        <VscVerifiedFilled className="mt-5 text-3xl text-green-500" />
      ) : (
        <Button
          as={disabledValidation ? "div" : "a"}
          target="_blank"
          href={href}
          disabled={disabledValidation}
        >
          Verify it!
        </Button>
      )}
    </div>
  );
}
