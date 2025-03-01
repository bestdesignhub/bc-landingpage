"use client";

import {
  RHFFormDropdownField,
  RHFInputField,
  RHFNumberField,
  RHFRadioGroup,
  SubmitButton,
} from "@/components";
import CONFIG from "@/config";
import axios from "axios";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type SignUpFormType = {
  first_name: string;
  last_name: string;
  gender_id: string;
  email: string;
  country_id: string;
  mobile_number: string;
};

const PreRegisterForm = ({
  countries,
  genders,
}: {
  countries: any[];
  genders: any[];
}) => {
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false);
  const DEFAULT_VALUES = {
    first_name: "",
    last_name: "",
    gender_id: genders?.[0]?.value,
    email: "",
    country_id: "",
    mobile_number: "",
  };
  const methods = useForm<SignUpFormType>({
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit = async (data: SignUpFormType) => {
    try {
      setDisableSubmit(true);
      const registrationResponse = await axios.post(
        `${CONFIG.apiUrl}/pre-user-registration`,
        {
          ...data,
          country_id: data?.country_id || null,
        }
      );
      if (registrationResponse.data.success) {
        toast.success(
          "Thank you for signing up! You’ve been added to our list and will be the first to know when we launch!"
        );
        methods.reset(DEFAULT_VALUES);
      } else {
        toast.error(
          registrationResponse.data.message || "Something went wrong!"
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setDisableSubmit(false);
    }
  };

  return (
    <>
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <div className="grid gap-2 md:grid-cols-2">
            <RHFInputField
              name="first_name"
              className="!bg-transparent"
              label="First Name"
              required
            />
            <RHFInputField
              name="last_name"
              className="!bg-transparent"
              label="Last Name"
              required
            />
          </div>
          <div className="grid gap-2">
            <RHFInputField
              name="email"
              label="Email Address"
              required
              type="email"
              className="!bg-transparent"
            />
          </div>
          <div className="grid gap-2">
            {/* <RHFFormDropdownField
              label="Phone Code"
              name="country_id"
              placeholder=""
              options={countries}
              isClearable={false}
              className="!bg-transparent"
            /> */}
            <RHFNumberField
              name="mobile_number"
              label="Phone Number"
              className="!bg-transparent"
            />
          </div>
          <RHFRadioGroup
            name="gender_id"
            label="Gender"
            options={genders}
            required
            className="bg-transparent"
          />
        </div>
        <div className="flex items-center justify-end mt-3">
          <SubmitButton label="Pre Register" disabled={disableSubmit} />
        </div>
      </form>
    </FormProvider>
    </>
  );
};

export default PreRegisterForm;
