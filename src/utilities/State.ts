const StatesJSON: any = {
    AndamanNicobar: "Andaman and Nicobar Islands",
    AndraPradesh: "Andhra Pradesh",
    ArunachalPradesh: "Arunachal Pradesh",
    Assam: "Assam",
    Bihar: "Bihar",
    Chandigarh: "Chandigarh",
    Chhattisgarh: "Chhattisgarh",
    DadraHaveli: "Dadra and Nagar Haveli",
    DamanDiu: "Daman and Diu",
    Delhi: "Delhi",
    Goa: "Goa",
    Gujarat: "Gujarat",
    Haryana: "Haryana",
    HimachalPradesh: "Himachal Pradesh",
    JammuKashmir: "Jammu and Kashmir",
    Jharkhand: "Jharkhand",
    Karnataka: "Karnataka",
    Kerala: "Kerala",
    Ladakh: "Ladakh",
    Lakshadweep: "Lakshadweep",
    MadhyaPradesh: "Madhya Pradesh",
    Maharashtra: "Maharashtra",
    Manipur: "Manipur",
    Meghalaya: "Meghalaya",
    Mizoram: "Mizoram",
    Nagaland: "Nagaland",
    Odisha: "Odisha",
    Puducherry: "Puducherry",
    Punjab: "Punjab",
    Rajasthan: "Rajasthan",
    Sikkim: "Sikkim",
    TamilNadu: "Tamil Nadu",
    Telangana: "Telangana",
    Tripura: "Tripura",
    UttarPradesh: "Uttar Pradesh",
    Uttarakhand: "Uttarakhand",
    WestBengal: "West Bengal",
};

const StateKeys = Object.keys(StatesJSON);
const States = StateKeys.map((index) => {
  return {
    value: index,
    label: StatesJSON[index],
  };
});

export default States;
