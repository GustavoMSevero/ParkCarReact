import { atomWithStorage, createJSONStorage } from "jotai/utils";

const storage = createJSONStorage(() => localStorage)

export const ownerAtom = atomWithStorage('owner', { ownerName: '', ownerEmail: ''}, storage);