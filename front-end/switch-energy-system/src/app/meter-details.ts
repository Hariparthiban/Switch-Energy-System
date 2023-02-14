import { ProviderDetails } from "./provider-details";

export interface MeterDetails   {
    meterId: string | null |undefined,
    userId : string | null |undefined,
    connection: string | null| undefined;
    provider : ProviderDetails
}
