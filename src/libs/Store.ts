import { type MarathonForm } from "../zod/MarathonSchema";
interface MarathonFormState {
  fname: string;
  lname: string;
  plan: "funrun" | "mini" | "half" | "full";
  gender: "male" | "female";
  email: string;
  password : string;
  confirmpassword : string;
  total:number;
  coupon:string;
  // Setters
  setFname: (v: string) => void;
  setLname: (v: string) => void;
  setPlan: (v: MarathonForm["plan"]) => void;
  setGender: (v: MarathonForm["gender"]) => void;
  setEmail: (v: string) => void;
  setPassword:(v:string) => void;
  setConfirmPassword:(v:string) => void;
  setCoupon: (v: string) => void;
  discountCoupon:(plan: MarathonForm["plan"], coupon: string) => void;
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้

  reset: () => void;
}
export type { MarathonFormState }