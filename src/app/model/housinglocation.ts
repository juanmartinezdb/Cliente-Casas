export interface HousingLocation {
    id: number;
    name: string;
    city: string;
    state: string;
    photo: string;
    availableUnits: number;
    wifi: boolean;
    laundry: boolean;
    coordinate: {
      latitude:number,
      longitude:number
    },

    sistemasSeguridad: string[];
  }
