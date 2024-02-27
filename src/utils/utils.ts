import { category } from "../types/types";

export function isEmpty(value: unknown): boolean {
    if (value === null || value === undefined) {
        return true;
    }

    if (typeof value === "string" && value.trim() === "") {
        return true;
    }

    if (Array.isArray(value) && value.length === 0) {
        return true;
    }

    if (typeof value === "object" && Object.keys(value).length === 0) {
        return true;
    }

    return false;
}

export const enumToArray: (enumObject: Object) => string[] = (enumObject) => {
    return Object.values(enumObject)
        .filter((value) => typeof value === "string")
        .map((value) => value as string);
};

//Not good, refine this later
export function stringToEnum(value: string): category {
    switch (value) {
        case "Study":
            return category.Study;
        case "Groceries":
            return category.Groceries;
        case "Fitness":
            return category.Fitness;
        case "Work":
            return category.Work;
        case "Housework":
            return category.Housework;
        case "Appointment":
            return category.Appointment;
        default:
            return category.Others;
    }
}

export function isInStringEnum(value: string): boolean {
    return Object.values(category).includes(value);
}

export function convertToDisplayDateFormat(DateTimeLocalString: string) {
    if (!DateTimeLocalString) return "";
    const yymmdd = DateTimeLocalString.split("T")[0];
    const time = DateTimeLocalString.split("T")[1];

    const year = yymmdd.split("-")[0];
    const month = yymmdd.split("-")[1];
    const day = yymmdd.split("-")[2];
    const hours = time.split(":")[0];
    const minutes = time.split(":")[1];

    return `${day}/${month}/${year}  ${hours}:${minutes}`;
}
