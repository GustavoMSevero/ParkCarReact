import { atomWithStorage, createJSONStorage } from "jotai/utils";

const storage = createJSONStorage(() => localStorage)

export const parkingAtom = atomWithStorage('parking', { idOwnerParking: '',  idParking: '', ownerEmail: '', parkingName: ''}, storage);