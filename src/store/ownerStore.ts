import { atomWithStorage, createJSONStorage } from "jotai/utils";

const storage = createJSONStorage(() => localStorage)

export const ownerAtom = atomWithStorage('owner', { id_owner_parking: '', ownerName: '', ownerEmail: ''}, storage);