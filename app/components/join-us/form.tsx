import { ValidatedForm } from "remix-validated-form";
import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";
import InputField from "../form/input";
import SubmitButton from "../form/submit-button";
import TextAreaField from "../form/textarea";

const validator = withZod(
  z.object({
    email: z.string().min(1, "Email is required").email(),
    expertise: z.string().min(1, "Expertise required"),
    fullname: z.string().min(1, "Fullname is required"),
  })
);

function JoinUsForm() {
  return (
    <div className="w-full max-w-[500px] mx-auto sm:mx-0">
      <ValidatedForm validator={validator} method="post" className="grid gap-4 sm:gap-6 lg:gap-8">
        <InputField label="Your fullname" name="fullname" placeholder="Email" />
        <InputField
          label="Your email address"
          name="email"
          type="email"
          placeholder="Your email address"
        />
        <TextAreaField
          label="What's your expertise ?"
          name="expertise"
          placeholder="What's your expertise ?"
          rows={6}
          className="sm:rows-8 lg:rows-10"
        />
        <SubmitButton className="bg-[#4F30E5] w-full sm:w-auto">Send</SubmitButton>
      </ValidatedForm>
    </div>
  );
}

export default JoinUsForm;
