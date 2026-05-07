type RichPeopleVehicles = {
  car: string,
  bike: string,
  cng : string,
}


type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeopleVehicles;
