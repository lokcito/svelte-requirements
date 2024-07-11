import { writable } from "svelte/store";
import { RequirementModel } from "../models/requirementModel";

const initialRequirement = [
    new RequirementModel({
        id: 1,
        name: 'Card ID',
        description: 'A copy of your card ID'
    }),
    new RequirementModel({
        id: 2,
        name: 'Photography',
        description: 'A photography for your passport.'
    })
];

export const requirements = writable(initialRequirement);
