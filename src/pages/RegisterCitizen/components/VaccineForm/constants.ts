export interface Vaccine {
  label: string;
  value: string;
}

export const VACCINES_TYPE: Vaccine[] = [
  {
    label: "Astrazenica",
    value: "Astrazenica"
  },
  {
    label: "Coronavac",
    value: "Coronavac"
  },
  {
    label: "Phizer",
    value: "Phizer"
  }
];

export const VACCINES_VALUE = VACCINES_TYPE.map((vaccine) => vaccine.value);
export const VACCINES_LABEL = VACCINES_TYPE.map((vaccine) => vaccine.label);
