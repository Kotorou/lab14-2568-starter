import { create } from "zustand";
import { type MarathonFormState } from "../libs/Store";
const basePrice = { funrun: 500, mini: 800, half: 1200, full: 1500 };
export const useMarathonFormStore = create<MarathonFormState>((set) => ({
  fname: "",
  lname: "",
  plan: "funrun",
  gender: "male",
  email: "",
  password:"",
  confirmpassword:"",
  total:0,
  coupon:"",
  setFname: (fname) =>
    set(() => ({
      fname: fname,
    })),
  setLname: (_lname) =>
    set(() => ({
      lname: _lname,
    })),
  setPlan: (_plan) =>
    set(() => ({
      plan: _plan,
    })),
  setGender: (_gender) =>
    set(() => ({
      gender: _gender,
    })),
  setEmail: (_email) =>
    set(() => ({
      email: _email,
    })),
    setPassword: (_password) =>
    set(() => ({
      password: _password,
    })),
    setConfirmPassword: (_confirmpassword) =>
    set(() => ({
     confirmpassword: _confirmpassword,
    })),
setCoupon: (_coupon) =>
    set(() => ({
     coupon: _coupon,
    })),
     discountCoupon: (plan, coupon) => {
    const price = basePrice[plan];
    const finalPrice = coupon.trim().toUpperCase() === "CMU2025" ? price * 0.7 : price;
    set({ total: finalPrice });
  },

    


    
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้
  
  reset: () =>
    set({
      fname: "",
      lname: "",
      plan: "funrun",
      gender: "male",
      email: "",
      password:"",
      confirmpassword:"",
      total:0,
      coupon:"",
    }),
}));
